window.onload = function() {
    let firstDiv = document.getElementById("firstDiv");
    let secondDiv = document.getElementById("secondDiv").children[0];

    let firstDivChildren = firstDiv.children[1];
    let secondDivParent = secondDiv.parentElement;

    console.log(firstDivChildren)
    console.log(secondDivParent)
}

