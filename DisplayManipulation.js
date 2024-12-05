function hide(id, btnId) {
    let elem = document.getElementById(id);
    let btn = document.getElementById(btnId);

    if (elem.style.display === "none") {
        elem.style.display = "block";
        btn.innerText = "v";
    } else {
        elem.style.display = "none"
        btn.innerText = ">"
    }

}
