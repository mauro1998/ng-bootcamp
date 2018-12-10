import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Projects, Project } from './project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Projects>;
  selectedProject: Project;
  isNew: boolean;
  showForm: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.projects$ = this.getProjects();
  }

  getProjects(): Observable<Projects> {
    return this.http.get<Projects>('api/projects');
  }

  add() {
    this.isNew = true;
    this.selectedProject = null;
    this.showForm = true;
  }

  edit(project: Project) {
    this.isNew = false;
    this.selectedProject = project;
    this.showForm = true;
  }

  delete(project: Project) {
    this.hideForm();
    this.projects$ = this.http
      .delete(`api/projects/${project.id}`)
      .pipe(switchMap(() => this.getProjects()));
  }

  hideForm() {
    this.showForm = false;
    this.selectedProject = null;
    this.isNew = false;
  }

  onSubmit(project: Project) {
    this.hideForm();
    let request$;

    if (!project.id) {
      request$ = this.http.post(`api/projects`, project);
    } else {
      request$ = this.http.put(`api/projects/${project.id}`, project);
    }

    this.projects$ = request$.pipe(switchMap(() => this.getProjects()));
  }
}
