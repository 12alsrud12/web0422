window.addEventListener("DOMContentLoaded", () => {
    const x = document.querySelector("#x_logo");
    const nav = document.querySelector("nav.mb.tb");
    console.log(x);
    console.log(nav);

    function xEvent() {
        x.classList.toggle("active");
        nav.classList.toggle("active");
    };

    x.onclick = () => {
        xEvent();
    };

})
