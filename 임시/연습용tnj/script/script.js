window.addEventListener("DOMContentLoaded", function () {
    // 요소찾기

    // header
    // X버튼
    const x = document.querySelector(".x_logo");
    const x1 = document.querySelectorAll(".x_logo hr")[0];
    const x2 = document.querySelectorAll(".x_logo hr")[1];
    const x3 = document.querySelectorAll(".x_logo hr")[2];
    const n = document.querySelector("nav");
    // 확인용!
    console.log(x1);
    console.log(x2);
    console.log(x3);

    // 클릭 시 X자로 변경하게 할 것 + 네비가 나오게 할 것

    x.onclick = function () {

        if (x1.classList == 'active', x2.classList == 'active', x3.classList == 'active') {
            x.onclick = function () {
                x1.classList.remove('active');
                x2.classList.remove('active');
                x3.classList.remove('active');
                n.classList.remove('active');
            }
        } else {
            x1.classList.add("active");
            x2.classList.add("active");
            x3.classList.add("active");
            n.classList.add("active");
        }

    };
})
