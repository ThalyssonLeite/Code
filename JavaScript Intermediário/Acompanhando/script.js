let player = document.getElementById("square");

let initialX = 0;
let initialY = 0;
let interval;

const startInterval = () => {
    interval = setInterval(movePlayer, 0);
}

function movePlayer() {

        playerPosition(initialX++, initialY++)
    
}

function playerPosition(x, y) {
    player.style.top = x + "px";
    player.style.left = y + "px";
}

const stop = () => clearInterval(interval);

const reset = () => {
    initialX = 0;
    initialY = 0;
}