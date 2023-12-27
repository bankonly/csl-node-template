export default class Environment {
	private static load(name: string, isRequired: boolean = true) {
		const env = process.env[name]
		if (isRequired && !env) throw new Error(`env variable: '${name}' is required`)

		return env
	}

	static readonly NODE_ENV = this.load("NODE_ENV")
	static readonly PORT = this.load("PORT")
}