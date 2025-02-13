import { ClientSession } from "mongoose";

class ErrorApi extends Error {
	readonly statusCode: number;

	constructor(message: string, statusCode: number = 500, session?: ClientSession) {
		if (session) {
			session.abortTransaction().then(() => session.endSession());
		}

		super(message);
		this.statusCode = statusCode;
	}
}

class CustomError extends Error {
	readonly isCustomError: boolean = true;
	readonly statusCode: number;

	constructor(message: object, statusCode: number = 500, session?: ClientSession) {
		if (session) {
			session.abortTransaction().then(() => session.endSession());
		}

		super(JSON.stringify(message));
		this.statusCode = statusCode;
	}
}

class BadRequestError extends ErrorApi {
	constructor(message: string, session?: ClientSession) {
		super(message, 400, session);
	}
}

class UnauthorizedError extends ErrorApi {
	constructor(message: string, session?: ClientSession) {
		super(message, 401, session);
	}
}

class NotFoundError extends ErrorApi {
	constructor(message: string, session?: ClientSession) {
		super(message, 404, session);
	}
}

export { BadRequestError, CustomError, ErrorApi, NotFoundError, UnauthorizedError };
