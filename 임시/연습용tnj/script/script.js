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
        };

    };

    // 스크롤에 따른 애니메이션
    const ppp = document.querySelectorAll("p")[0];
    const mainMenu1 = document.querySelectorAll(".main_menu>a")[0];
    const mainMenu2 = document.querySelectorAll(".main_menu>a")[1];
    const mainMenu3 = document.querySelectorAll(".main_menu>a")[2];
    const mainMenu4 = document.querySelectorAll(".main_menu>a")[3];
    const mainMenu5 = document.querySelectorAll(".main_menu>a")[4];

    // 헤더 스크롤 내릴 시 색상 변경
    const header = document.querySelector("header");
    console.log(header);
    console.log(mainMenu1);
    console.log(mainMenu2);
    console.log(mainMenu3);
    console.log(mainMenu4);
    console.log(mainMenu5);

    window.addEventListener("scroll", function () {
        ppp.innerHTML = Math.floor(pageYOffset);

        if (ppp.innerHTML <= 0) {
            // section1 animation

            // header bg 맨위 도착시 색이 돌아오게 하기
            n.classList.remove("pc_bg");
            mainMenu1.classList.remove("active");
            mainMenu2.classList.remove("active");
            mainMenu3.classList.remove("active");
            mainMenu4.classList.remove("active");
            mainMenu5.classList.remove("active");
        } else if (ppp.innerHTML <= 10) {
            // header PC버전 스크롤 내릴 시 색상 변경
            n.classList.add("pc_bg");
            mainMenu1.classList.add("active");
            mainMenu2.classList.add("active");
            mainMenu3.classList.add("active");
            mainMenu4.classList.add("active");
            mainMenu5.classList.add("active");
        } else if (ppp.innerHTML >= 800) {
            // section2 animation
        } else if (ppp.innerHTML >= 1700) {
            // section3 animation
        } else if (ppp.innerHTML >= 2600) {
            // section4 animation
        } else if (ppp.innerHTML >= 3490) {
            // section5 animation
        } else {
            // 그 외
        }

    });

});
