/**
 * Abstracted all the material imports into another module file so it is easy to use this imports around the app.
 * And because they tend to be so numerous.
 */

// Angular Imports
import { NgModule } from '@angular/core';

import {
	MatButtonModule,
	MatTableModule
} from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatTableModule
	],
	exports: [
		MatButtonModule,
		MatTableModule
	]
})
export class MaterialDesignModule { }
