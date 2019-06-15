// Angular Imports
import { NgModule } from '@angular/core';
import { DataTableComponent } from './data-table/data-table.component';

// Shared module imports
import { MaterialDesignModule } from '@shared';

@NgModule({
	imports: [
		MaterialDesignModule
	],
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
