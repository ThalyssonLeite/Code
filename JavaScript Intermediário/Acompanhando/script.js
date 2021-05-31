let number = 0;

function changeTitleText() {
    let h1 = document.getElementById("title");
    h1.innerHTML = "New title"

    setTimeout(changeTitleColor, 300);
    setInterval(titleSum, 0)
}

function changeTitleColor() {
    let h1 = document.getElementById("title");
    h1.style = "color: blue"
}

function titleSum() {
    let h1 = document.getElementById("title");
    h1.innerHTML += " " + number;
    number++;
}