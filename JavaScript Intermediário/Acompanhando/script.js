function change() {
let title = document.getElementById("title");
title.onclick = changeTitleText;
}

function changeTitleText() {
    this.innerHTML = "Novo Texto"
}
