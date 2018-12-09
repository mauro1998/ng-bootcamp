import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees, Employee } from './employee.interface';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  employees$: Observable<Employees>;
  selectedEmployee: Employee;
  isNew: boolean;
  showForm: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.employees$ = this.getEmployees();
  }

  getEmployees(): Observable<Employees> {
    return this.http.get<Employees>('api/employees');
  }

  add() {
    this.isNew = true;
    this.selectedEmployee = null;
    this.showForm = true;
  }

  edit(employee: Employee) {
    this.isNew = false;
    this.selectedEmployee = employee;
    this.showForm = true;
  }

  delete(employee: Employee) {
    this.hideForm();
    this.employees$ = this.http
      .delete(`api/employees/${employee.id}`)
      .pipe(switchMap(() => this.getEmployees()));
  }

  hideForm() {
    this.showForm = false;
    this.selectedEmployee = null;
    this.isNew = false;
  }

  onSubmit(employee: Employee) {
    this.hideForm();
    let request$;

    if (!employee.id) {
      request$ = this.http.post(`api/employees`, employee);
    } else {
      request$ = this.http.put(`api/employees/${employee.id}`, employee);
    }

    this.employees$ = request$.pipe(switchMap(() => this.getEmployees()));
  }
}
