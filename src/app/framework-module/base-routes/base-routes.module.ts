// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// UI module imports
import { UiModule } from '@ui';

// Page module imports
import { MissingPageComponent } from './missing-page/missing-page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		UiModule
	],
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
