import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Project } from '../project.interface';

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
    clientName: '',
    size: 0,
    employeeIds: [],
  };

  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter<Partial<Project>>();

  @Input() isNew: boolean;

  @Input('project')
  set employeeChange(project: Project) {
    if (!project) project = this.employeeDefaults;

    this.form = this.formBuilder.group({
      id: project.id,
      name: [project.name, Validators.required],
      clientName: [project.clientName, Validators.required],
      size: project.size,
      addEmployees: [true],
    });
  }

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(e: Event) {
    e.stopPropagation();

    const update = {
      id: this.form.value.id,
      name: this.form.value.name,
      clientName: this.form.value.clientName,
      size: this.form.value.size,
    };

    this.submit.emit(update);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
