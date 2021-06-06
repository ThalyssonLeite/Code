let unorderedList = document.getElementById("unorderedList");
let unorderedListElements = parseInt(unorderedList.getAttribute("num"));

let content = "";

function createLists() {
    for (let counter = 0; counter < (unorderedListElements + 1); counter++) {

        content += `<li>${counter}</li>
        `;
    }

    unorderedList.innerHTML = content;
}


