window.addEventListener("DOMContentLoaded", function () {
    // 요소찾기
    const x = document.querySelector(".x_icon");
    const x1 = document.querySelectorAll(".x_icon hr")[0];
    const x2 = document.querySelectorAll(".x_icon hr")[1];
    const x3 = document.querySelectorAll(".x_icon hr")[2];
    const xx = document.querySelectorAll("div.x_icon.active")[0];

    // 확인용!
    console.log(x1);
    console.log(x2);
    console.log(x3);

    // 클릭 시 X자로 변경하게 할 것

    x.onclick = function () {
        x1.classList.add("active");
        x2.classList.add("active");
        x3.classList.add("active");
    };

    xx.onclick = function () {
        x1.classList.remove("active");
        x2.classList.remove("active");
        x3.classList.remove("active");
    };
})
