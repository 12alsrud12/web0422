window.addEventListener("DOMContentLoaded", () => {
    const pMath = document.querySelector("#mathfoor");
    const headerPc = document.querySelector("header.pc");
    const headerMbTb = document.querySelector("header.mb.tb");

    pMath.innerHTML = Math.floor(pageYOffset);

    if (pMath.innerHTML <= 50) {
        headerPc.classList.add("down");
    } else {
        headerPc.classList.remove("down");
    };

});