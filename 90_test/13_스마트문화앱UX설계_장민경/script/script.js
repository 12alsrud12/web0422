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

        // 데스크탑
        // #sec2
        if (window.innerWidth < 1025, p.innerHTML >= 400, p.innerHTML <= 1200) {
            s2h2.classList.add("active");
            s2p.classList.add("active");
        } else {
            s2h2.classList.remove("active");
            s2p.classList.remove("active");
        };

        // #sec3
        if (window.innerWidth < 1025, p.innerHTML < 2800, p.innerHTML >= 2800) {
            s3h2.classList.add("active");
            s3p.classList.add("active");
        } else {
            s3h2.classList.remove("active");
            s3p.classList.remove("active");
        };

        // #sec4
        if (window.innerWidth < 1025, p.innerHTML <= 2000) {
            s4h2.classList.add("active");
            s4p.classList.add("active");
        } else {
            s4h2.classList.remove("active");
            s4p.classList.remove("active");
        };

        // 태블릿
        // #sec2
        if (window.innerWidth > 1024, window.innerWidth < 380, p.innerHTML >= 400, p.innerHTML <= 1300) {
            s2h2.classList.add("active");
            s2p.classList.add("active");
        } else {
            s2h2.classList.remove("active");
            s2p.classList.remove("active");
        };

        // #sec3
        if (window.innerWidth > 1024, window.innerWidth < 380, p.innerHTML <= 1200, p.innerHTML >= 2000) {
            s3h2.classList.add("active");
            s3p.classList.add("active");
        } else {
            s3h2.classList.remove("active");
            s3p.classList.remove("active");
        };

        // #sec4
        if (window.innerWidth > 1024, window.innerWidth < 380, p.innerHTML >= 2300) {
            s4h2.classList.add("active");
            s4p.classList.add("active");
        } else {
            s4h2.classList.remove("active");
            s4p.classList.remove("active");
        };

        // 모바일
        // #sec2
        if (window.innerWidth > 375, p.innerHTML >= 200, p.innerHTML <= 1000) {
            s2h2.classList.add("active");
            s2p.classList.add("active");
        } else {
            s2h2.classList.remove("active");
            s2p.classList.remove("active");
        };

        // #sec3
        if (window.innerWidth > 375, p.innerHTML >= 1100, p.innerHTML <= 1700) {
            s3h2.classList.add("active");
            s3p.classList.add("active");
        } else {
            s3h2.classList.remove("active");
            s3p.classList.remove("active");
        };

        // #sec4
        if (window.innerWidth > 375, p.innerHTML >= 1700) {
            s4h2.classList.add("active");
            s4p.classList.add("active");
        } else {
            s4h2.classList.remove("active");
            s4p.classList.remove("active");
        };
    });
    // #sec3 tabs
    // 요소찾기
    const btn1 = document.querySelectorAll(".btn>ul>li")[0];
    const btn2 = document.querySelectorAll(".btn>ul>li")[1];
    console.log(btn1);
    console.log(btn2);

    const tab1 = document.querySelectorAll(".tabs>.tab")[0];
    const tab2 = document.querySelectorAll(".tabs>.tab")[1];
    console.log(tab1);
    console.log(tab2);

    // resetT
    function resetT() {
        btn1.classList.remove("on");
        tab1.classList.remove("on");
        btn2.classList.remove("on");
        tab2.classList.remove("on");
    };

    // 이벤트
    btn1.onclick = () => {
        resetT();
        btn1.classList.add("on");
        tab1.classList.add("on");
    };

    btn2.onclick = () => {
        resetT();
        btn2.classList.add("on");
        tab2.classList.add("on");
    };

    // slide
    // #sec1
    $(function () {

        $('.slide').bxSlider({
            autoControls: false,
            // auto: false(기본값), true이면 자동 전환
            auto: true,
        });

    });

    // slide
    // #sec2
    $(() => {
        $('.slider').slick({
            // 데스크탑
            // 자동 슬라이드
            autoplay: false,
            autoplaySpeed: 2000,
            slidesToScroll: 1,
            // 현재 보이는 슬라이드 수
            slidesToShow: 5,
            centerMode: true,
            centerPadding: '0px',
            dots: false,
            responsive: [
                {
                    // 992 이하 테블릿
                    breakpoint: 1024,
                    settings: {
                        // arrows: false -> 좌우버튼 숨기기
                        autoplay: true,
                        autoplaySpeed: 2000,
                        centerMode: true,
                        centerPadding: '32px',
                        slidesToShow: 2,
                        dots: true,
                    }
                },
                {
                    // 768 이하 폰
                    breakpoint: 768,
                    settings: {
                        // arrows: false -> 좌우버튼 숨기기
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        });
    }); // ready 이벤트



})
