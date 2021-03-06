// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Shared module imports
import { MaterialDesignModule } from '@shared';

// UI Module imports
import { DataTableComponent } from './data-table/data-table.component';
import { HamburgerButtonComponent } from './hamburger-button/hamburger-button.component';
import { GhostTableComponent } from './ghost-table/ghost-table.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialDesignModule
	],
	declarations: [
		DataTableComponent,
		HamburgerButtonComponent,
		GhostTableComponent
	],
	exports: [
		DataTableComponent,
		GhostTableComponent,
		HamburgerButtonComponent
	]
})
export class UiModule { }

// Export components that belong to this module
export { DataTableComponent } from './data-table/data-table.component';
export { GhostTableComponent } from './ghost-table/ghost-table.component';
export { HamburgerButtonComponent } from './hamburger-button/hamburger-button.component';
