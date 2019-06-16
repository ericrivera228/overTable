// Angular imports
import { Injectable } from '@angular/core';

// rxjs imports
import { Observable, of } from 'rxjs';

// Shared module imports
import { HttpResult } from '@shared';

//  Raw data for this service to return
import { MockData } from './mock-data';

/**
 * Convenient service for providing fake data.
 */
@Injectable({
  providedIn: 'root'
})
export class MockDataService {

	constructor() { }

	get basicTableData(): Observable<HttpResult<any[][]>> {
		return of(new HttpResult<any[][]>(MockData.basicTableData, null));
	}

	/**
	 * Returns a big array data
	 * @return {Observable} [description]
	 */
	get bigBasicTableData(): Observable<HttpResult<any[][]>> {

		// Base data set to work with
		let baseData = MockData.basicTableData;

		// Splice out the header, that only needs to be added once
		let multipliedData = baseData.splice(0, 1);

		// Loop a couple of times to create a big data array to return
		for (let counter = 0; counter < 5; counter++) {
			multipliedData = [...multipliedData, ...baseData];
		}

		return of(new HttpResult<any[][]>(multipliedData, null));
	}
}
