import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatPaginator,
  MatSnackBar,
  MatSort,
  MatTableDataSource,
} from '@angular/material';
import { merge, Observable, Subject } from 'rxjs';
import {
  filter,
  map,
  shareReplay,
  switchMap,
  take,
  takeUntil,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { Project, Projects } from './project.interface';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  source$: Observable<MatTableDataSource<Project>>;
  columns: string[];

  projects$ = new Subject<Projects>();
  paginator$ = new Subject();
  sort$ = new Subject();
  unsubscribe$ = new Subject();

  @ViewChild(MatPaginator)
  set paginator(paginator) {
    if (paginator) this.paginator$.next(paginator);
  }

  @ViewChild(MatSort)
  set sort(sort) {
    if (sort) this.sort$.next(sort);
  }

  @Input() actions: string[];

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.columns = ['name', 'clientName', 'size', 'actions'];
    this.source$ = this.projects$.pipe(
      map((projects = []) => {
        const source = new MatTableDataSource(projects);
        return source;
      }),
      shareReplay(1),
    );

    merge(this.paginator$, this.sort$)
      .pipe(
        withLatestFrom(this.source$),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(
        ([item, source]: [
          MatPaginator | MatSort,
          MatTableDataSource<Project>
        ]) => {
          if (item instanceof MatPaginator) source.paginator = item;
          else source.sort = item;
        },
      );

    this.fetchProjects();
  }

  fetchProjects() {
    this.http.get<Projects>('api/projects').subscribe((projects: Projects) => {
      this.projects$.next(projects);
    });
  }

  add() {
    this.dialog
      .open(ProjectComponent, { data: null, width: '679px' })
      .afterClosed()
      .pipe(
        filter((project: Project) => !!project),
        take(1),
      )
      .subscribe((project: Project) => this.submit(project));
  }

  edit(project: Project) {
    this.dialog
      .open(ProjectComponent, { data: project, width: '679px' })
      .afterClosed()
      .pipe(
        filter((project: Project) => !!project),
        take(1),
      )
      .subscribe((project: Project) => this.submit(project));
  }

  delete(project: Project) {
    const { name } = project;
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete project',
        description: [
          `You are about to delete the project ${name}.`,
          'Are you sure you want to proceed?',
        ],
      },
    });

    dialog
      .afterClosed()
      .pipe(
        filter((confirm: boolean) => confirm),
        take(1),
        switchMap(() => this.http.delete(`api/projects/${project.id}`)),
      )
      .subscribe(() => {
        this.showSnackBar(`The project ${name} has been deleted`);
        this.fetchProjects();
      });
  }

  submit(project: Project) {
    const { name } = project;

    let request$;

    if (!project.id) {
      request$ = this.http
        .post(`api/projects`, project)
        .pipe(
          tap(() => this.showSnackBar(`The project ${name} has been created`)),
        );
    } else {
      request$ = this.http
        .put(`api/projects/${project.id}`, project)
        .pipe(
          tap(() => this.showSnackBar(`The project ${name} has been updated`)),
        );
    }

    request$.subscribe(() => this.fetchProjects());
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  filter(source: MatTableDataSource<Project>, value: string) {
    source.filter = value.trim().toLowerCase();

    if (source.paginator) {
      source.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
