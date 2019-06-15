// Angular imports
import { Component, OnInit } from '@angular/core';
import { animate, state, sequence, style, transition, trigger } from '@angular/animations';

// Animation info for this component
import * as _a from './hamburger-button-animations';

@Component({
	selector: 'ot-hamburger-button',
	templateUrl: './hamburger-button.component.html',
	styleUrls: ['./hamburger-button.component.css'],
	animations: [
		_a.hamburgerAnimations
	]
})
export class HamburgerButtonComponent implements OnInit {

	// Property backing variables
	private _componentState: _a.HAMBURGER_BUTTON_STATES = _a.HAMBURGER_BUTTON_STATES.Shut;

	/**
	 * Indicates the current state of this component.
	 */
	get componentState(): _a.HAMBURGER_BUTTON_STATES {
		return this._componentState;
	}

	constructor() { }

	ngOnInit() { }

	onHamburgerButtonClick(evt: Event) {

		if (this._componentState === _a.HAMBURGER_BUTTON_STATES.Open) {
			this._componentState = _a.HAMBURGER_BUTTON_STATES.Shut;
		} else {
			this._componentState = _a.HAMBURGER_BUTTON_STATES.Open;
		}

	}

}
