// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Page module imports
import { BaseRoutesModule } from '@base-routes';

// Local imports
import { OverTableRoutingModule } from './overTable-routing.module';
import { OverTableComponent } from './overTableComponent/overTable.component';

@NgModule({
  declarations: [
	OverTableComponent
  ],
  imports: [
	BrowserModule,
	BaseRoutesModule,
	OverTableRoutingModule
  ],
  providers: [],
  bootstrap: [OverTableComponent]
})
export class FrameworkModule { }
