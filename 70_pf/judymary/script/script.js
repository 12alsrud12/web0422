window.addEventListener("DOMContentLoaded", () => {
    // 요소찾기
    // sec3 contents
    // sec3 button
    const bt1 = document.querySelectorAll(".btn li")[0];
    const bt2 = document.querySelectorAll(".btn li")[1];
    console.log(bt1);
    console.log(bt2);
    // sec3 tabs
    const tab1 = document.querySelectorAll(".tab")[0];
    const tab2 = document.querySelectorAll(".tab")[1];
    console.log(tab1);
    console.log(tab2);

    // tab reset
    function resetA() {
        bt1.classList.remove("on");
        bt2.classList.remove("on");
        tab1.classList.remove("on");
        tab2.classList.remove("on");
    };

    // tab 작동
    bt1.onclick = function () {
        resetA();
        bt1.classList.add("on");
        tab1.classList.add("on");
    };
    bt2.onclick = function () {
        resetA();
        bt2.classList.add("on");
        tab2.classList.add("on");
    };

    // scroll 모선
    // 스크롤 길이 check
    // 요소찾기
    const p = document.querySelector("#pppp");
    console.log(p);

    // scroll motion
    // 요소찾기
    const title1 = document.querySelectorAll("#sec2>h2")[0];
    const title2 = document.querySelectorAll("#sec3>h2")[0];
    const title2_2 = document.querySelectorAll("#sec3>h2.mb")[0];
    const title3 = document.querySelectorAll("#sec4>h2")[0];

    const sub_t1 = document.querySelectorAll("#sec2>p")[0];
    const sub_t2 = document.querySelectorAll("#sec3>p")[0];
    const sub_t3 = document.querySelectorAll("#sec4>p")[0];

    console.log(title1);
    console.log(title2);
    console.log(title2_2);
    console.log(title3);

    console.log(sub_t1);
    console.log(sub_t2);
    console.log(sub_t3);


    // 스크롤확인 + scroll motion

    window.addEventListener("scroll", function () {
        p.innerHTML = Math.floor(pageYOffset);

        if (p.innerHTML >= 300) {
            title1.classList.add("active");
            sub_t1.classList.add("active");

        } else if (p.innerHTML <= 900) {
            title2.classList.add("active");
            title2_2.classList.add("active");
            sub_t2.classList.add("active");

        } else if (p.innerHTML >= 1800) {
            title3.classList.add("active");
            sub_t3.classList.add("active");
        } else {
            title1.classList.remove("active");
            title2.classList.remove("active");
            title2_2.classList.remove("active");
            title3.classList.remove("active");

            sub_t1.classList.remove("active");
            sub_t2.classList.remove("active");
            sub_t3.classList.remove("active");
        }
    });

})
