$('.slide').bxSlider({
    // General
    mode: 'fade',
    // auto를 false 로 바꾸면 캐러샐 슬라이드 동작 멈춤 버튼표시를 안보이게+자동슬라이드 정지.
    auto: true,
    // autoControls는 false로 하면 위와 다르게 슬라이드는 움직이고 버튼만 지운다.
    autoControls: false,
    // click시 자동 슬라이드를 순간 정지시킨다. false로 변경하면 click해도 슬라이드가 안멈춘다.
    stopAutoOnClick: false,
    // 페이저(pager,indicator 인디케이터 라고도함) 은 슬라이드 순서 보여주는 동그라미
    pager: false,
    // pause : 슬라이드 정지 시간 1밀리미초라서 1000 = 1초 4000 = 4초
    pause: 5000,
    slideWidth: 1080
});

$('.slide2').bxSlider({
    // General
    mode: 'fade',
    // auto를 false 로 바꾸면 캐러샐 슬라이드 동작 멈춤 버튼표시를 안보이게+자동슬라이드 정지.
    auto: true,
    // autoControls는 false로 하면 위와 다르게 슬라이드는 움직이고 버튼만 지운다.
    autoControls: false,
    // click시 자동 슬라이드를 순간 정지시킨다. false로 변경하면 click해도 슬라이드가 안멈춘다.
    stopAutoOnClick: false,
    // 페이저(pager,indicator 인디케이터 라고도함) 은 슬라이드 순서 보여주는 동그라미
    pager: false,
    // pause : 슬라이드 정지 시간 1밀리미초라서 1000 = 1초 4000 = 4초
    pause: 5000,
    slideWidth: 1920
});

const header = document.querySelector("header");
const serch = document.querySelectorAll(".serch a")[0];
const myPage = document.querySelectorAll(".serch_my>a")[0];

header.onmouseenter = function () {
    // header :hover 시 icon 변경 
    serch.innerHTML = ('<img src="images/serch_ico_hover.png" alt="hover_ico1">');
    myPage.innerHTML = ('<img src="images/My_page_ico_hover.png" alt="hover_ico1">');
};

header.onmouseleave = function () {
    // header mouse leave 시 icon 복구
    serch.innerHTML = ('<img src="images/serch_ico.png" alt="hover_ico1">');
    myPage.innerHTML = ('<img src="images/My_page_ico.png" alt="hover_ico1">');
};

// tabs!!

// 요소찾기
const li1 = document.querySelectorAll('#tabs ul li')[0];
const li2 = document.querySelectorAll('#tabs ul li')[1];

const bt1 = document.querySelectorAll('#tabs a')[0];
const bt2 = document.querySelectorAll('#tabs a')[1];


// tab 1,2 찾기
const cont1 = document.querySelector('#tab1');
const cont2 = document.querySelector('#tab2');

// 확인
console.log(cont1);
console.log(cont2);


// 이벤트처리
// 버튼1을 클릭하면 p.on
bt1.onclick = function () {
    cont1.classList.add('on');
    cont2.classList.remove('on');
};

// 버튼2을 클릭하면 p.off
bt2.onclick = function () {
    cont2.classList.add('on');
    cont1.classList.remove('on');
};