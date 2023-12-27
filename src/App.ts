import express from "express"
import Environment from "@configs/Environment"
import ErrorHandlerMiddleware from "@middlewares/ErrorHandler"
import cors from "cors"
import IndexRouter from "@routers/IndexRouter"

export default class AppServer {
	static app = express() // Application express

	static start() {
		// Register on-request middleware
		this.app.use(express.json())
		this.app.use(cors())

		// Register routers
		this.app.use(IndexRouter.route())

		this.app.use(ErrorHandlerMiddleware.catchError)
		this.app.use(ErrorHandlerMiddleware.unimplementedRoute)

		// Expose application
		this.app.listen(Environment.PORT, this.listener)
	}

	static listener() {
		console.info("Version:", Environment.NODE_ENV)
		console.info("Port:", Environment.PORT)
	}
}