// Angular imports
import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatTableDataSource, MatRow, MatSort } from '@angular/material';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

// rxjs imports
import { Observable, Subscription } from 'rxjs';

// Shared module imports
import { AppTriggers, BaseComponent } from '@shared';

// Mock service imports
import { MockDataService } from '@mock-services';

@Component({
	selector: 'ot-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss'],
	animations: [
		AppTriggers.tableFadeInOut
	]
})
export class DataTableComponent extends BaseComponent implements OnInit, AfterViewInit {

	// private variables
	private _dataSubscriptionIndex: number = null;

	// property backing variables
	private _dataObservable: Observable<string[][]>;
	private _headers: string[];
	private _tableData = new MatTableDataSource<string[]>();

	// public variables
	loading = true;

	@ViewChildren(MatSort)
	public sort: QueryList<MatSort>;

	/**
	 * Specifies how many columns to show in the ghost table while the data is loading.
	 */
	@Input()
	numberOfGhostColumns: number;

	/**
	 * Specifies how many rows to show in the ghost table while the data is loading.
	 */
	@Input()
	numberOfGhostRows: number;

	/**
	 * Observable of data to be displayed in the table. This table will subscrube to this observable. Whenever it fires,
	 * the table will update to display the provided data.
	 */
	@Input()
	set dataObservable(dataObservable: Observable<any[][]>) {

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

		// Special handling for sorting, since data is just strings instead of objects
		this._tableData.sortingDataAccessor = (item, property) => {
			return item[this._headers.indexOf(property)];
		};

	}

	ngAfterViewInit() {

		// The sort object doesn't always exist - whenever it is created attach it to the
		// data source object
		this.autoscribe(this.sort.changes, () => {

			// There will only ever be one object in this list; can assume its the proper one
			if (this.sort.length > 0) {
				this._tableData.sort = this.sort.first;
			}

		});

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
