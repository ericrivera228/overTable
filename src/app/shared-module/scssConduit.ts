const PREFIX = '--';

/**
 * Class than can be used to get 'communicate' with the scss styles. Useful for say, grabbing the value of the defined theme
 * variabled.
 */
export class ScssConduit {

	constructor() { }

	/**
	 * Gets the value of the given scss variable. The variables name available are:
	 * 	primary-color
	 * 	accent-color
	 * 	warn-color
	 */
	static getScssVariable(name: string): string {
		return window.getComputedStyle(document.body).getPropertyValue(PREFIX + name);
	}
}
