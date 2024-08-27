window.addEventListener("DOMContentLoaded", () => {
    // section1 요소찾기
    const x_button = document.querySelector(".x_button");
    const sec1_sub1 = document.querySelector("#sec1_wrap");
    const sec1_sub2 = document.querySelector("#s1_sub_cont");

    // x버튼을 click시 s1_banner 3개가 등장한다.

    x_button.onclick = () => {
        sec1_sub1.classList.toggle("action");
        sec1_sub2.classList.toggle("action");
    };

});