function speakGeneric() {
    console.log(this.sound)
}

let dog = {
    sound: "ow",
    speak: speakGeneric
}

let cat = {
    sound: "miaw",
    speak: speakGeneric
}

let bindedFunction = speakGeneric.bind(dog);

bindedFunction();