import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'projects',
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'employees',
        component: EmployeesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
