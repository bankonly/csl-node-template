import { NextFunction, Request, Response } from "express";

export type AsyncFunctionType = (request: Request, response: Response, next: NextFunction) => Promise<any>;
export default class AsyncFunction {
	public static handler = (execution: AsyncFunctionType) => (req: Request, response: Response, next: NextFunction) => {
		execution(req, response, next).catch(next);
	};
}