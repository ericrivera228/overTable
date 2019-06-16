import { animate, AnimationMetadata, style } from '@angular/animations';

/**
 * Class for storing general, application wide animations.
 */
export class AppAnimations {

	static readonly timeUnit = 'ms';
	static readonly fadeLength = 100;

	static readonly fadeIn: AnimationMetadata[] = [
		style({ opacity: 0 }),
		animate(`${AppAnimations.fadeLength}${AppAnimations.timeUnit}`, style({
			opacity: 1
		}))
	];

	static readonly fadeOut: AnimationMetadata[] = [
		style({ opacity: 1 }),
		animate(`${AppAnimations.fadeLength}${AppAnimations.timeUnit}`, style({
			opacity: 0
		}))
	];

}
