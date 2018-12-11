import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subject } from 'rxjs';
import { Project } from '../project.interface';
import { Employees } from '../../employees/employee.interface';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnDestroy {
  form: FormGroup;
  unsubscribe$ = new Subject();
  employeeDefaults: Project = {
    id: null,
    name: '',
    size: 0,
    clientName: '',
    employeeIds: [],
  };

  constructor(
    private dialog: MatDialogRef<ProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public project: Project,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    if (!this.project) this.project = this.employeeDefaults;

    this.form = this.formBuilder.group({
      id: this.project.id,
      name: [this.project.name, Validators.required],
      size: [this.project.size, Validators.required],
      clientName: [this.project.clientName, Validators.required],
      employeeIds: this.formBuilder.array(this.project.employeeIds),
      addEmployees: [!!this.project.employeeIds.length],
    });
  }

  onSelectionChange(employees: Employees = []) {
    const ids = employees.map(({ id }) => id);
    this.form.removeControl('employeeIds');
    this.form.addControl('employeeIds', this.formBuilder.array(ids));
    this.form.get('size').setValue(employees.length);
  }

  onSubmit(e: Event) {
    e.stopPropagation();

    const update: Project = {
      id: this.form.value.id,
      name: this.form.value.name,
      size: this.form.value.size,
      clientName: this.form.value.clientName,
      employeeIds: this.form.value.employeeIds,
    };

    this.dialog.close(update);
  }

  get isNew() {
    return !this.project.id;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  innerClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }
}
