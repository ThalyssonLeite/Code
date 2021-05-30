window.onload = function() {
    let h1 = document.getElementsByTagName("h1");
    
    for (let h of h1) {
        console.log(h);

        h.addEventListener("click", whoIsTheFather);
    }

    function whoIsTheFather(e) {
        let target = e.target;
        let parent = target.parentElement;

        console.log(parent);
    }
}

