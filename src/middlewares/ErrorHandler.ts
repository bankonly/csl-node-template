import { NextFunction, Request, Response } from "express";

export default class ErrorHandlerMiddleware {
	static catchError(err: any, req: Request, res: Response, next: NextFunction) {
		const errorMessage = err.message
		res.status(500).json(errorMessage)
	}

	static unimplementedRoute(req: Request, res: Response, next: NextFunction) {
		res.status(404).json({ message: "unimplemented" })
	}
}