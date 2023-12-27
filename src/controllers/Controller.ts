import AsyncFunction from "@func/AsyncFunc"

export default class Controller {
	static health = AsyncFunction.handler(async (req, res) => {
		res.json({ message: "OK" })
	})
}