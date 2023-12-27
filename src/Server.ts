// Register alias module
import moduleAlias from "module-alias";
moduleAlias.addAliases({
	"@components": `${__dirname}/components`,
	"@configs": `${__dirname}/configs`,
	"@func": `${__dirname}/func`,
	"@controllers": `${__dirname}/controllers`,
	"@interfaces": `${__dirname}/interfaces`,
	"@middlewares": `${__dirname}/middlewares`,
	"@validator": `${__dirname}/middlewares/validators`,
	"@models": `${__dirname}/models`,
	"@providers": `${__dirname}/providers`,
	"@routers": `${__dirname}/routers`,
	"@tstypes": `${__dirname}/tstypes`,
	"@services": `${__dirname}/services`,
	"@storages": `${__dirname}/storages`,
	"@utils": `${__dirname}/utils`
});

// Load all environment variables
import * as dotenv from "dotenv";
dotenv.config();

import AppServer from "./App";

AppServer.start()