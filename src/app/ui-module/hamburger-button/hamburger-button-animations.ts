// Angular imports
import { animate, state, sequence, style, transition, trigger } from '@angular/animations';

// The states this component can be in
export const enum HAMBURGER_BUTTON_STATES {
	Open = 'open',
	Shut = 'shut'
}

// Use the same time unit for all animations, so maths line up
export const TIME_UNIT = 'ms';
export const CONTRACTION_LENGTH = 50;
export const SPIN_LENGTH = 100;
export const EXAGGERATE_LENGTH = 50;
export const INTERVEL_LENGTH = 25;

export const hamburgerAnimations = [
	trigger('middleLineAnimation', [
		state(HAMBURGER_BUTTON_STATES.Shut, style({
		visibility : 'visible'
	})),
	state(HAMBURGER_BUTTON_STATES.Open, style({
		visibility : 'hidden'
	})),
	transition(`${HAMBURGER_BUTTON_STATES.Shut} => ${HAMBURGER_BUTTON_STATES.Open}`, [
		animate(`0ms ${CONTRACTION_LENGTH}${TIME_UNIT}`)
	]),
	transition(`${HAMBURGER_BUTTON_STATES.Open} => ${HAMBURGER_BUTTON_STATES.Shut}`, [
		animate(`${SPIN_LENGTH}${TIME_UNIT} ${SPIN_LENGTH}${TIME_UNIT}`)
	]),
	]),
	trigger('topLineAnimation', [
		state(HAMBURGER_BUTTON_STATES.Shut, style({
			top: '0',
			transform: 'rotate(0deg)'
		})),
		state(HAMBURGER_BUTTON_STATES.Open, style({
			top: '6px',
			transform: 'rotate(45deg)'
		})),
		transition(`${HAMBURGER_BUTTON_STATES.Shut} => ${HAMBURGER_BUTTON_STATES.Open}`, [
			sequence([
					animate(`${CONTRACTION_LENGTH}${TIME_UNIT} ease-in`, style({
					top: '6px'
				})),
				animate(`${SPIN_LENGTH}${TIME_UNIT} ${INTERVEL_LENGTH}${TIME_UNIT}`, style({
					transform: 'rotate(60deg)'
				})),
				animate(`${EXAGGERATE_LENGTH}${TIME_UNIT} ${INTERVEL_LENGTH}${TIME_UNIT} ease-out`, style({
					transform: 'rotate(45deg)'
				})),
			])
		]),
		transition(`${HAMBURGER_BUTTON_STATES.Open} => ${HAMBURGER_BUTTON_STATES.Shut}`, [
			sequence([
				animate(`${SPIN_LENGTH}${TIME_UNIT} ease-in`, style({
					transform: 'rotate(0deg)'
				})),
					animate(`${CONTRACTION_LENGTH}${TIME_UNIT} ${INTERVEL_LENGTH}${TIME_UNIT}`, style({
					top: '-2px'
				})),
					animate(`${EXAGGERATE_LENGTH}${TIME_UNIT} ease-out`, style({
					top: '0'
				})),
			])
		])
	]),
	trigger('bottomLineAnimation', [
		state(HAMBURGER_BUTTON_STATES.Shut, style({
			top: '0',
			transform: 'rotate(0deg)'
		})),
		state(HAMBURGER_BUTTON_STATES.Open, style({
			top: '-6px',
			transform: 'rotate(-45deg)'
		})),
		transition(`${HAMBURGER_BUTTON_STATES.Shut} => ${HAMBURGER_BUTTON_STATES.Open}`, [
			sequence([
				animate(`${CONTRACTION_LENGTH}${TIME_UNIT} ease-in`, style({
					top: '-6px'
				})),
				animate(`${SPIN_LENGTH}${TIME_UNIT} ${INTERVEL_LENGTH}${TIME_UNIT}`, style({
					transform: 'rotate(-60deg)'
				})),
				animate(`${EXAGGERATE_LENGTH}${TIME_UNIT} ${INTERVEL_LENGTH}${TIME_UNIT} ease-out`, style({
					transform: 'rotate(-45deg)'
				})),
			])
		]),
		transition(`${HAMBURGER_BUTTON_STATES.Open} => ${HAMBURGER_BUTTON_STATES.Shut}`, [
			sequence([
				animate(`${SPIN_LENGTH}${TIME_UNIT} ease-in`, style({
					transform: 'rotate(0deg)'
				})),
				animate(`${CONTRACTION_LENGTH}${TIME_UNIT} ${INTERVEL_LENGTH}${TIME_UNIT}`, style({
					top: '2px'
				})),
				animate(`${EXAGGERATE_LENGTH}${TIME_UNIT} ease-out`, style({
					top: '0'
				})),
			])
		])
	]),
];
