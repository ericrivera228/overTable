// Angular Imports
import { NgModule } from '@angular/core';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
	declarations: [
		DataTableComponent
	],
	exports: [
		DataTableComponent
	]
})
export class UiModule { }

// Export components that belong to this module
export { DataTableComponent } from './data-table/data-table.component';
