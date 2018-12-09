import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { EmployeeComponent } from './employees/employee/employee.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProjectsComponent,
    EmployeesComponent,
    EmployeeComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, DashboardRoutingModule],
})
export class DashboardModule {}
