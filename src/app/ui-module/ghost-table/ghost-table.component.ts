import { Component, HostBinding, Input, OnInit } from '@angular/core';

// Shared module imports
import { AppTriggers } from '@shared';

@Component({
  selector: 'ot-ghost-table',
  templateUrl: './ghost-table.component.html',
  styleUrls: ['./ghost-table.component.scss'],
  animations: [
  	AppTriggers.tableFadeInOut
  ]
})
export class GhostTableComponent implements OnInit {

	/**
	 * Specifies how many ghost columns to show in the table
	 */
	@Input()
	numberOfColumns: number;

	/**
	 * Specifies how many ghost rows to show in the table
	 */
	@Input()
	numberOfRows: number;

	/**
	 * The ghost table is typically displayed with an ngIf. Thus, to get the rows to stagger in\out,
	 * the animation trigger needs to be attched to the <ot-ghost-table> tag. This dose that automatically,
	 * instead of requiring whatever component is hosting the ghost table to do it automatically.
	 */
	@HostBinding('@tableFadeInOut')
	get tableFadeInOut() {

		// What's returned doesn't actually matter
		return;
	}

	constructor() { }

	ngOnInit() { }

}
