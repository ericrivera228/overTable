// Angular imports
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatRow } from '@angular/material';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

// rxjs imports
import { Observable, Subscription } from 'rxjs';

// Shared module imports
import { AppAnimations, BaseComponent } from '@shared';

// Mock service imports
import { MockDataService } from '@mock-services';

@Component({
	selector: 'ot-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss'],
	animations: [
		trigger('animateTable', [
			transition(':enter', [
				query('tr', [
					style({ opacity: 0 }),
				]),
				query('tr', stagger('25ms', AppAnimations.fadeIn))
			])
		])
	]
})
export class DataTableComponent extends BaseComponent implements OnInit {

	// private variables
	private _dataSubscriptionIndex: number = null;

	// property backing variables
	private _dataObservable: Observable<string[][]>;
	private _headers: string[];
	private _tableData = new MatTableDataSource<string[]>();

	// public variables
	loading = true;

	/**
	 * Observable of data to be displayed in the table. This table will subscrube to this observable. Whenever it fires,
	 * the table will update to display the provided data.
	 */
	@Input()
	set dataObservable(dataObservable: Observable<string[][]>) {

		// parameter verification
		if (dataObservable == null) {
		  throw new Error('Invalid value provided for "dataObservable".');
		}

		// Only do work if the observable provided is a different object
		if (dataObservable !== this._dataObservable) {

			// If a previous subscription was set up, remove it
			if (this._dataSubscriptionIndex != null) {
			  this.subscriptions[this._dataSubscriptionIndex].unsubscribe();
			}

			// Set up the subscription - whenver the observable emits, process the data so it is displayed in the table
			this._dataSubscriptionIndex = this.autoscribe(dataObservable, result => {

				if (result != null) {
					this.intakeData(result);
				}

			});

		}

	}

	/**
	 * @return An Array of strings representing the header of this table.
	 */
	get headers(): string[] {
		return this._headers;
	}

	/**
	 * @return The data source object being used by this table.
	 */
	get tableData(): MatTableDataSource<string[]> {
		return this._tableData;
	}

	constructor(private mockDataService: MockDataService) {
		super();
	}

	ngOnInit() {

	}

	/**
	 * Takes the given data and configures this table component to display it.
	 * @param data The data this table is to display, where the first row is the headers.
	 */
	private intakeData(data: string[][]) {

		// Grab the headers - they will be on the first row
		this._headers = data.shift();

		// Add the rest of the data to the data source
		this._tableData.data = data;

		// Show the data!
		this.loading = false;

	}

}
