let number = 0;
let interval;

function start() {
    let h1 = document.getElementById("title");
    interval = setInterval(changeTitle, 1000)
    if (!(h1.innerText.includes("New"))) {
        h1.innerHTML = "New title"
    }
}

function stop() {   
    clearInterval(interval);
}

function changeTitle() {
    let h1 = document.getElementById("title");
    h1.innerHTML += " " + number;
    number++;
}