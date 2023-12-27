import express from "express"
import { ServerDTO } from "./models/dto/Server"

export default class AppServer {
	static app = express() // Application express
	
	static init(opts: ServerDTO) {
		this.app.listen(opts.port,() => {
			console.log(opts)
		})
	}
}