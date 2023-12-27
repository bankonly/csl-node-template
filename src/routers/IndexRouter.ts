import { Router } from "express"
import AppRouter from "./AppRouter"

export default class IndexRouter {
	static route(): Router {
		const router = Router()
		router.use("/app", AppRouter.route())

		return router
	}
}