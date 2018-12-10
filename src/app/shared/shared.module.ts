import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ComponentsModule } from './components/components.module';

const modules = [CommonModule, MaterialModule, ComponentsModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedModule {}
