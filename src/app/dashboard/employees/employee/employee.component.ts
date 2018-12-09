import { DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Employee } from '../employee.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [DatePipe],
})
export class EmployeeComponent implements OnDestroy {
  form: FormGroup;
  unsubscribe$ = new Subject();
  employeeDefaults: Employee = {
    id: null,
    name: '',
    lastName: '',
    age: null,
    birthday: null,
    projectId: null,
  };

  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter<Partial<Employee>>();

  @Input() isNew: boolean;

  @Input('employee')
  set employeeChange(employee: Employee) {
    if (!employee) employee = this.employeeDefaults;

    this.form = this.formBuilder.group({
      id: employee.id,
      firstName: [employee.name, Validators.required],
      lastName: [employee.lastName, Validators.required],
      age: [employee.age, Validators.required],
      birthday: [
        this.datePipe.transform(employee.birthday, 'yyyy-MM-dd'),
        Validators.required,
      ],
      projectId: employee.projectId,
    });

    this.form
      .get('birthday')
      .valueChanges.pipe(
        takeUntil(this.unsubscribe$),
        map(val => {
          const now = Date.now();
          const birthday = this.fixDate(val).getTime();
          const timeDiff = Math.abs(now - birthday);
          const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
          return Math.floor(diffDays / 365);
        }),
      )
      .subscribe(age => this.form.get('age').setValue(age));
  }

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe) {}

  fixDate(value) {
    const date = new Date(value);
    date.setDate(date.getDate() + 1);
    return date;
  }

  onSubmit(e: Event) {
    e.stopPropagation();

    const update = {
      id: this.form.value.id,
      name: this.form.value.firstName,
      lastName: this.form.value.lastName,
      age: this.form.value.age,
      birthday: this.fixDate(this.form.value.birthday).toDateString(),
      projectId: this.form.value.projectId,
    };

    this.submit.emit(update);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
