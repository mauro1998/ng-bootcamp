import { NgModule } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [ConfirmDialogComponent, HeaderComponent],
  entryComponents: [ConfirmDialogComponent],
  exports: [ConfirmDialogComponent, HeaderComponent],
})
export class ComponentsModule {}
