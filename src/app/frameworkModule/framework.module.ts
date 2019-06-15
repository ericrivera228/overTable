// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Local imports
import { OverTableRoutingModule } from './overTable-routing.module';
import { OverTableComponent } from './overTableComponent/overTable.component';

@NgModule({
  declarations: [
    OverTableComponent
  ],
  imports: [
    BrowserModule,
    OverTableRoutingModule
  ],
  providers: [],
  bootstrap: [OverTableComponent]
})
export class FrameworkModule { }
