import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { EmployeeComponent } from './employees/employee/employee.component';
import { ProjectComponent } from './projects/project/project.component';
import { SearchToolComponent } from './projects/project/search-tool/search-tool.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProjectsComponent,
    EmployeesComponent,
    EmployeeComponent,
    ProjectComponent,
    SearchToolComponent,
  ],
  entryComponents: [EmployeeComponent, ProjectComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
