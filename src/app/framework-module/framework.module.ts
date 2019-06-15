// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Page module imports
import { BaseRoutesModule } from '@base-routes';

// Local imports
import { OverTableRoutingModule } from './overtable-routing.module';
import { OvertableComponent } from './overtable/overtable.component';

@NgModule({
declarations: [
  OvertableComponent
],
imports: [
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule,
  BaseRoutesModule,
  OverTableRoutingModule
],
providers: [],
bootstrap: [
  OvertableComponent
]
})
export class FrameworkModule { }
