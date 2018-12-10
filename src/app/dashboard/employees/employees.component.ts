import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
  MatSnackBar,
} from '@angular/material';
import { merge, Observable, Subject } from 'rxjs';
import {
  map,
  shareReplay,
  takeUntil,
  withLatestFrom,
  switchMap,
  filter,
  take,
  tap,
} from 'rxjs/operators';
import { Employee, Employees } from './employee.interface';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  source$: Observable<MatTableDataSource<Employee>>;
  columns: string[];

  employees$ = new Subject<Employees>();
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
    this.columns = ['name', 'age', 'birthday', 'actions'];
    this.source$ = this.employees$.pipe(
      map((employees = []) => {
        const source = new MatTableDataSource(employees);
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
          MatTableDataSource<Employee>
        ]) => {
          if (item instanceof MatPaginator) source.paginator = item;
          else source.sort = item;
        },
      );

    this.fetchEmployees();
  }

  fetchEmployees() {
    this.http
      .get<Employees>('api/employees')
      .subscribe((employees: Employees) => {
        this.employees$.next(employees);
      });
  }

  add() {
    this.dialog
      .open(EmployeeComponent, { data: null })
      .afterClosed()
      .pipe(
        filter((employee: Employee) => !!employee),
        take(1),
      )
      .subscribe((employee: Employee) => this.submit(employee));
  }

  edit(employee: Employee) {
    this.dialog
      .open(EmployeeComponent, { data: employee })
      .afterClosed()
      .pipe(
        filter((employee: Employee) => !!employee),
        take(1),
      )
      .subscribe((employee: Employee) => this.submit(employee));
  }

  delete(employee: Employee) {
    const name = this.getShortName(employee);
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete employee',
        description: [
          `You are about to delete the employee ${name}.`,
          'Are you sure you want to proceed?',
        ],
      },
    });

    dialog
      .afterClosed()
      .pipe(
        filter((confirm: boolean) => confirm),
        take(1),
        switchMap(() => this.http.delete(`api/employees/${employee.id}`)),
      )
      .subscribe(() => {
        this.showSnackBar(`The employee ${name} has been deleted`);
        this.fetchEmployees();
      });
  }

  submit(employee: Employee) {
    const name = this.getShortName(employee);

    let request$;

    if (!employee.id) {
      request$ = this.http
        .post(`api/employees`, employee)
        .pipe(
          tap(() => this.showSnackBar(`The employee ${name} has been created`)),
        );
    } else {
      request$ = this.http
        .put(`api/employees/${employee.id}`, employee)
        .pipe(
          tap(() => this.showSnackBar(`The employee ${name} has been updated`)),
        );
    }

    request$.subscribe(() => this.fetchEmployees());
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  filter(source: MatTableDataSource<Employee>, value: string) {
    source.filter = value.trim().toLowerCase();

    if (source.paginator) {
      source.paginator.firstPage();
    }
  }

  getShortName(employee) {
    const shift = str => str.split(' ').shift();
    return `${shift(employee.name)} ${shift(employee.lastName)}`;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
