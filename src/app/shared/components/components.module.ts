import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
  Error404Component],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
  ]
})

export class ComponentsModule { }
