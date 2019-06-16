// Angular imports
import { query, stagger, style, transition, trigger} from '@angular/animations';

// Share module imports
import { AppAnimations } from '@shared';

export class AppTriggers {

	static readonly tableFadeInOut = trigger('tableFadeInOut', [
		transition(':enter', [
			query('tr', [
				style({ opacity: 0 }),
			]),
			query('tr', stagger('25ms', AppAnimations.fadeIn))
		]),
		transition(':leave', [
			style({ position: 'absolute', top: 0 }),
			query('tr', [
				style({ opacity: 1 }),
			]),
			query('tr', stagger('25ms', AppAnimations.fadeOut))
		])
	]);

}
