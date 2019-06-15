// Angular Imports
import { NgModule } from '@angular/core';

// Page module imports
import { MissingPageComponent } from './missing-page/missing-page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		MissingPageComponent,
		HomeComponent
	],
	exports: [
		MissingPageComponent,
		HomeComponent
	]
})
export class BaseRoutesModule { }

// Export components that belong to this module
export { MissingPageComponent } from './missing-page/missing-page.component';
export { HomeComponent } from './home/home.component';
