window.addEventListener("DOMContentLoaded", () => {
    // header serch
    // 요소찾기
    const mb_header = document.querySelector("header.mb.tb");
    const serch = document.querySelector("header.mb.tb .serch>div");
    const serch_input = document.querySelector("header.mb.tb .serch>input");
    console.log(mb_header);
    console.log(serch);
    console.log(serch_input);

    // 마우스 클릭 시 검색창 생성
    serch.onclick = () => {
        serch_input.classList.add("active")
    };

    // 마우스 떠낫을 시 검색창 사라짐
    serch.onmouseleave = () => {
        serch_input.classList.remove("active")
    };

    // x_logo
    const x = document.querySelector("#x_logo");
    const nav = document.querySelector("header.mb.tb>nav");
    console.log(x);
    console.log(nav);

    function xEvent() {
        x.classList.toggle("active");
        nav.classList.toggle("active");
    };

    x.onclick = () => {
        xEvent();
    };

});