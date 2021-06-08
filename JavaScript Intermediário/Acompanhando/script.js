let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");


context.beginPath();

context.strokeStyle = "red";
context.arc(250, 250, 25, 0, 2 * Math.PI)
context.stroke();

context.beginPath();

context.strokeStyle = "green";
context.moveTo(225.5, 175);
context.lineTo(275.5, 175);
context.closePath();
context.stroke();