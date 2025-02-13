import { NextFunction, Request, Response } from "express";
import { CustomError, ErrorApi } from "../shared/ErrorApi";

const ErrorMiddleware = (error: Error & Partial<ErrorApi> & Partial<CustomError>, req: Request, res: Response, next: NextFunction) => {
	const statusCode = error.statusCode ?? 500;
	const errorMessage = error.message;

	if (error.isCustomError) {
		res.status(statusCode).json({ error: true, ...JSON.parse(errorMessage) });
	} else {
		res.status(statusCode).json({ error: true, message: errorMessage });
	}
};

export { ErrorMiddleware };
