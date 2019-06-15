// Angular Imports
import { NgModule } from '@angular/core';

// Shared module imports
import { MaterialDesignModule } from '@shared';

// UI Module imports
import { DataTableComponent } from './data-table/data-table.component';
import { HamburgerButtonComponent } from './hamburger-button/hamburger-button.component';

@NgModule({
	imports: [
		MaterialDesignModule
	],
	declarations: [
		DataTableComponent,
		HamburgerButtonComponent
	],
	exports: [
		DataTableComponent,
		HamburgerButtonComponent
	]
})
export class UiModule { }

// Export components that belong to this module
export { DataTableComponent } from './data-table/data-table.component';
export { HamburgerButtonComponent } from './hamburger-button/hamburger-button.component';