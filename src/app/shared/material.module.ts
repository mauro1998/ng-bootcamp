import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatTabsModule,
  MatIconModule,
  MatSortModule,
  MatMenuModule,
  MatDialogModule,
  MatSnackBarModule,
  MatCardModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatTabsModule,
  MatSortModule,
  MatMenuModule,
  MatDialogModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatCardModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
