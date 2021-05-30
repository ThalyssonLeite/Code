function loaded() {
    let t1 = document.getElementById("t1");
    let t2 = document.getElementById("t2");

    t1.addEventListener("click", transformToUpperCase);
    t2.addEventListener("click", transformToUpperCase);
}

function transformToUpperCase() {
    this.innerHTML = this.innerHTML.toUpperCase();
}