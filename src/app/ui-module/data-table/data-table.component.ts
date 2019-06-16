// Angular imports
import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatRow, MatSort } from '@angular/material';
import { Sort } from '@angular/material/sort';
import { animate, query, stagger, state, style, transition, trigger, AnimationEvent } from '@angular/animations';

// rxjs imports
import { Observable, Subscription } from 'rxjs';

// Shared module imports
import { AppTriggers, BaseComponent } from '@shared';

// Mock service imports
import { MockDataService } from '@mock-services';

// The states a table row can be in
export const enum TABLE_ROW_STATES {
	Expanded = 'expanded',
	Collapsed = 'collapsed'
}

export const TIME_UNIT = 'ms';
export const EXPANSION_LENGTH = 225;

@Component({
	selector: 'ot-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss'],
	animations: [
		AppTriggers.tableFadeInOut,
		trigger('detailExpand', [
			state('collapsed', style({height: '0px', minHeight: '0'})),
			state('expanded', style({height: '*'})),
			transition(`${TABLE_ROW_STATES.Expanded} <=> ${TABLE_ROW_STATES.Collapsed}`, animate(`${EXPANSION_LENGTH}${TIME_UNIT} cubic-bezier(0.4, 0.0, 0.2, 1)`))
		]),
	]
})
export class DataTableComponent extends BaseComponent implements OnInit, AfterViewInit {

	// private variables
	private _dataSubscriptionIndex: number = null;
	private _expandedRow: string[] = null;

	// property backing variables
	private _dataObservable: Observable<string[][]>;
	private _headers: string[];
	private _tableData = new MatTableDataSource<string[]>();

	// public variables
	loading = true;

	@ViewChildren(MatSort)
	public sort: QueryList<MatSort>;

	@ViewChildren(MatPaginator)
	public paginator: QueryList<MatPaginator>;

	/**
	 * Specifies if the paginator should be enabled.
	 */
	@Input()
	enablePaginator: boolean = false;

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

	get showPaginator(): boolean {
		return !this.loading && this.enablePaginator;
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

	ngOnInit() { }

	ngAfterViewInit() {
		this.subscribeToTableObjects();
	}

	/**
	 * Indicates if the given row is currently expanded.
	 */
	isRowExpanded(row: string[]): boolean {
		return this._expandedRow === row;
	}

	/**
	 * Handler for when a row is clicked.
	 */
	onRowClick(row: string[]) {

		// If the row clicked is alredy expanded, close it. Otherwise, open the new row
		this._expandedRow = this._expandedRow === row ? null : row;

	}

	/**
	 * Indicates the state of the given row.
	 * @return Returns TABLE_ROW_STATES enumeration. 'Expanded' if the row is currently expanded,
	 * 'Collpased' if otherwise.
	 */
	getRowState(row: string[]): string {
		return row === this._expandedRow ? TABLE_ROW_STATES.Expanded : TABLE_ROW_STATES.Collapsed;
	}

	/**
	 * Custom sorting method for the matSort object. Using the built in MatSort caused a bug where sorting a
	 * column would expand rows, seemingly at random. Implementing a custom sort fixed this.
	 */
	sortData(sort: Sort) {

		// If sorting was turned off, or a direction wasn't provided, nothing to do
		if (!sort.active || sort.direction === '') {
			return;
		}

		// Store the data in a temporary place, so the original array can be cleared
		const data = this._tableData.data;

		// Determine the index of the column being sorted
		const index = this._headers.indexOf(sort.active);

		// Clear out the data - needed to fix a weird bug where sorting a column would make all the rows expand
		this._tableData.data = [];

		// Sort the data
		this._tableData.data = data.sort((a, b) => {
			return this.compare(a[index], b[index], sort.direction === 'asc');
		});

	}

	/**
	 * The sort and paginators objects don't always exists. So, whenever they are created, attach
	 * them to the data source object.
	 */
	private subscribeToTableObjects() {

		this.autoscribe(this.sort.changes, () => {

			// There will only ever be one object in this list; can assume its the proper one
			if (this.sort.length > 0) {
				this._tableData.sort = this.sort.first;
			} else {
				this._tableData.sort = null;
			}


		});

		this.autoscribe(this.paginator.changes, () => {

			// There will only ever be one object in this list; can assume its the proper one
			if (this.paginator.length > 0) {
				this._tableData.paginator = this.paginator.first;
			} else {
				this._tableData.paginator = null;
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

	/**
	 * Function for comparing various data types.
	 */
	private compare(a: number | string, b: number | string, isAsc: boolean) {
	  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
	}

}
