import Controller from "@controllers/Controller"
import { Router } from "express"

export default class AppRouter {

	static route(): Router {
		const router = Router()
		router.get("/health", Controller.health)

		return router
	}
}