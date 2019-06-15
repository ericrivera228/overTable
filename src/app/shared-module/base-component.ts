// Angular imports
import { OnDestroy } from '@angular/core';

// rxjs imports
import { Observable, zip } from 'rxjs';

export abstract class BaseComponent implements OnDestroy {

	// List of all the subscriptions this component has autoscribed to
	protected subscriptions: any[] = [];

	/**
	 * Automatic subscription for the given observable. When this component is destroyed, the subscription is automatically cleaned up.
	 * The subscriptions created are kept track of in the 'subscriptions' array. This method returns the index of the newly created
	 * subscription, so the subclass can access it if needed.
	 */
	autoscribe<T, R>(observable: Observable<T>, callBack: (result: T) => R): number {

		// Subscribe to the observable and add it to the array
		this.subscriptions.push(observable.subscribe(callBack));

		// Return the index of the next subscription
		return this.subscriptions.length - 1;
	}

	ngOnDestroy() {

		// Clean up all of the subscriptions this component subscribed to
		this.subscriptions.forEach(subscription => {
			subscription.unsubscribe();
		});

	}
}
