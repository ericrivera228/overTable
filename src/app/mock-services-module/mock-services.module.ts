// Angular Imports
import { ModuleWithProviders, NgModule } from '@angular/core';

// Mock service module imports
import { MockData } from './mock-data';
import { MockDataService } from './mock-data.service';

@NgModule({
	imports: [
	],
	providers: [
		MockDataService
	]
})
export class MockServiceModule { }

// Export components that belong to this module
export { MockData } from './mock-data';
export { MockDataService } from './mock-data.service';
