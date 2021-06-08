let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");



let circle = {
    x: 250,
    y: 250,
    radius: 100,
    start: 0,
    end:0 * Math.PI,
    counterClockise: true,
}

function drawCircle(c) {
    {
        context.beginPath();

        context.rect(0, 0, 500, 500);
        context.fillStyle = "beige";
        context.fill();
    }

    {
        context.beginPath();

        context.strokeStyle = "red";
        context.lineWidth = 5;
        context.fillStyle = "blue";
        context.arc(c.x, c.y, c.radius, c.start, c.end, c.counterClockwise);
        context.closePath();
        context.stroke();
        context.fill();
    }
}

setInterval(animateCircle, 0);

function animateCircle() {
    if (circle.end < 2 * Math.PI) {
        circle.end += 0.01;
        circle.x += 0.1;
        console.log(circle.end)
    } 

    drawCircle(circle);
}
