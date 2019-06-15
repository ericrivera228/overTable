// Angular imports
import { Component, OnInit } from '@angular/core';

// rxjs imports
import { Observable, Subject } from 'rxjs';

// Shared module imports
import { BaseComponent } from '@shared';

// Mock service imports
import { MockDataService } from '@mock-services';

@Component({
  selector: 'ot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {

	dataSubject = new Subject<string[][]>();

	constructor(private mockData: MockDataService) {
		super();
	}

	ngOnInit() {

		this.autoscribe(this.mockData.basicTableData, result => {

			// Put this in a timeout to ensure ensure the view has been set up
			setTimeout(() => { this.dataSubject.next(result.value); });

		});

	}

}
