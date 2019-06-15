// Angular imports
import { Injectable } from '@angular/core';

// rxjs imports
import { Observable, of } from 'rxjs';

// Shared module imports
import { HttpResult } from '@shared';

//  Raw data for this service to return
import * as md from './mock-data';

/**
 * Convenient service for providing fake data.
 */
@Injectable({
  providedIn: 'root'
})
export class MockDataService {

	constructor() { }

	get basicTableData(): Observable<HttpResult<string[][]>> {
		return of(new HttpResult<string[][]>(md.basicTableData, null));
	}

}
