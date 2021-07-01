const getFlagValue = require("./getFlagValue");

console.log(`Oi ${getFlagValue("--name")}, ${getFlagValue("--greeting")}`)