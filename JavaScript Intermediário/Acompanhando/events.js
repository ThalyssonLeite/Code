//Chapolin emite "help", e ele completa com o bordão dele.

const eventEmitter = require("events");
const { inherits }= require("util");

function Character(name) {
    this.name = name;
}

const chapolin = new Character('chapolin');

inherits(Character, eventEmitter);

chapolin.on("help", () => {
    console.log(`Oh! E agora quem poderá me defender? Sou eu! O ${chapolin.name} Colorado!`);

    process.exit();
});

chapolin.emit("help")
chapolin.emit("help")