// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  BaseRoutesModule,
  OverTableRoutingModule
],
providers: [],
bootstrap: [
  OvertableComponent
]
})
export class FrameworkModule { }
