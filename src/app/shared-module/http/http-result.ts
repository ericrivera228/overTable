// Http imports
import { HttpMessage } from './http-message';
import { HttpMessageType } from './http-message-type';

/**
 * Class for representing the result of an http call. Details the result of the call and any
 * messages that may have been returned.
 */
export class HttpResult<T> {

	// Value returned by the http call
	value: T;

	// Array of messages returned from the http call
	resultMessages: HttpMessage[] = [];

	constructor(value: T, messages?: HttpMessage[]) {

		this.value = value;
		this.resultMessages = messages;

	}

	/**
	 * Indicates if this http result is valid. This is determined by looking for the existence of error messages
	 * in this result.
	 * @return False if any error messages exist, true otherwise.
	 */
	get isValid(): boolean {

		// If there are no error messages, then this result must be valid
		if (this.resultMessages == null || this.resultMessages.length <= 0) {
			return true;
		}

		// If there are error messages, check to see if any of them are error messages
		return this.resultMessages && this.resultMessages.find(message => message.type === HttpMessageType.Error) == null;
	}

}
