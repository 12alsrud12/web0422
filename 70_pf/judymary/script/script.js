window.addEventListener("DomContentLoaded", () => {

    // 요소찾기
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const x = document.querySelectorAll("header .x_logo")[0];
    console.log(header);
    console.log(nav);
    console.log(x);

    x.onclick = function () {
        if (x === classList('active')) {
            x.classList.remove('active');
        } else {
            x.classList.add('active');
        };
    };

});