let canvas = document.getElementById("canvas");

let canvasContext = canvas.getContext("2d");


const blueSquare = () => {
canvasContext.fillStyle = "blue";

// In general, the first two arguments represent the X and Y (axis) padding and the other two arguments that comes after them represents the normal width and height properties.
canvasContext.fillRect(10, 10, 200, 200);
}

const drawnBlueSquare = () => {
canvasContext.strokeStyle = "blue";
canvasContext.lineWidth = 10;
canvasContext.strokeRect(220, 10, 200, 200);
}

const bordedBlueSquare = () => {
canvasContext.rect(15, 230, 200, 200);
canvasContext.fillStyle = "blue";
canvasContext.lineWidth = 10;
canvasContext.strokeStyle = "cornflowerblue";
canvasContext.fill();
canvasContext.stroke();
}

bordedBlueSquare();
blueSquare();
drawnBlueSquare();

canvasContext.clearRect(30, 30, 50, 50);