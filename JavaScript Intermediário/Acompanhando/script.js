let canvas = document.getElementById("canvas");
let canvasContext = canvas.getContext("2d");

canvasContext.beginPath();

canvasContext.lineWidth = 5;
canvasContext.strokeStyle = "red";
canvasContext.moveTo(0, 0);
canvasContext.lineTo(400, 300);
canvasContext.stroke();

canvasContext.beginPath();

canvasContext.lineWidth = 7;
canvasContext.strokeStyle = "blue";
canvasContext.fillStyle = "green";
canvasContext.moveTo(250, 30);
canvasContext.lineTo(300, 300);
canvasContext.lineTo(200, 300);
canvasContext.closePath();
canvasContext.stroke();
canvasContext.fill();
