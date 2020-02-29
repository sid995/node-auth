abstract class HttpError extends Error {
	public status!: Number;
}

export class BadRequest extends HttpError {
	constructor(message = "Bad Request") {
		super(message);

		this.status = 400;
	}
}
