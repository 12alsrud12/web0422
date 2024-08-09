window.addEventListener("DOMContentLoaded", () => {
    // 모바일 햄버거 버튼
    // 요소찾기
    const x = document.querySelector("#x_logo");
    const nav = document.querySelector("nav.mb.tb");

    // 확인
    console.log(x);
    console.log(nav);

    // 이벤트
    function xEvent() {
        x.classList.toggle("active");
        nav.classList.toggle("active");
    };

    x.onclick = () => {
        xEvent();
    };

    // 스크롤이벤트
    // 요소찾기
    const p = document.querySelector("#pppp");
    console.log(p);

    // 각 섹션별 h3,p 요소찾기
    const s2h2 = document.querySelector("#sec2>h2");
    const s3h2 = document.querySelector("#sec3>h2");
    const s4h2 = document.querySelector("#sec4>h2");
    console.log(s2h2);
    console.log(s3h2);
    console.log(s4h2);
    const s2p = document.querySelector("#sec2>p");
    const s3p = document.querySelector("#sec3>p");
    const s4p = document.querySelector("#sec4>p");
    console.log(s2p);
    console.log(s3p);
    console.log(s4p);


    // 이벤트
    window.addEventListener("scroll", () => {
        p.innerHTML = Math.floor(pageYOffset);

        // #sec2
        if (p.innerHTML >= 400, p.innerHTML <= 1300) {
            s2h2.classList.add("active");
            s2p.classList.add("active");
        } else {
            s2h2.classList.remove("active");
            s2p.classList.remove("active");
        };

        // #sec3
        if (p.innerHTML >= 1400, p.innerHTML <= 2300) {
            s3h2.classList.add("active");
            s3p.classList.add("active");
        } else {
            s3h2.classList.remove("active");
            s3p.classList.remove("active");
        };

        // #sec4
        if (p.innerHTML >= 2400) {
            s4h2.classList.add("active");
            s4p.classList.add("active");
        } else {
            s4h2.classList.remove("active");
            s4p.classList.remove("active");
        };
    });

    $(function () {

        $('.slide').bxSlider({
            autoControls: false,
            // auto: false(기본값), true이면 자동 전환
            auto: true,
        });

    });



})
