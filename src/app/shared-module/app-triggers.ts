// Angular imports
import { animate, group, query, stagger, style, transition, trigger} from '@angular/animations';

// Share module imports
import { AppAnimations } from './app-animations';

export class AppTriggers {

	static readonly timeUnit = 'ms';
	static readonly staggerTime: number = 25;

	static readonly tableFadeInOut = trigger('tableFadeInOut', [
		transition(':enter', [
			query('.fade-row, .detail-tr', [
				style({ opacity: 0 }),
			]),
			group([
				query('.fade-row', stagger(`${AppTriggers.staggerTime}${AppTriggers.timeUnit}`, AppAnimations.fadeIn)),
				query('.detail-tr', [stagger(`${AppTriggers.staggerTime}${AppTriggers.timeUnit}`, AppAnimations.fadeIn)], { optional: true })
			])

		]),
		transition(':leave', [
			style({ position: 'absolute', top: 0 }),
			query('.fade-row', [
				style({ opacity: 1 }),
			]),
			group([
				query('.fade-row', stagger(`${AppTriggers.staggerTime}${AppTriggers.timeUnit}`, AppAnimations.fadeOut)),
				query('.detail-tr', [stagger(`${AppTriggers.staggerTime}${AppTriggers.timeUnit}`, AppAnimations.fadeOut)], { optional: true })
			])
		])
	]);

}
