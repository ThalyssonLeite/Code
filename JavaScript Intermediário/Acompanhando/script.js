let screen = document.getElementById("screen");
let context = screen.getContext("2d");
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(500, 0);
// The methods that play with the "style" and  can be setted anywhere, as long as it stays behind the stroke() function.
context.lineWidth = 5;
context.strokeStyle = "blue";
// Just one stroke() function is required to do the job.
context.stroke();
