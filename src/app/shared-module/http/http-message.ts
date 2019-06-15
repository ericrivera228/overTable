import { HttpMessageType } from './http-message-type';

/**
 * Class that represents a message from doing an http call.
 */
export class HttpMessage {

	message: string;
	type: HttpMessageType;

	constructor(message: string, type: HttpMessageType) {
		this.type = type;
		this.message = message;
	}

}
