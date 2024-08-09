window.addEventListener("DOMContentLoaded", () => {
    // 요소찾기
    const collapsedMenuIcon = document.querySelector(".collapsedMenuIcon");
    const nav = document.querySelector("nav");
    console.log(collapsedMenuIcon);
    console.log(nav);

    // 이벤트 처리
    collapsedMenuIcon.onclick = function () {
        myFunction(event.currentTarget);
    };

    function myFunction(x) {
        // toggle x 객체가 change를 가지고있으면 제거, 아니면 추가
        x.classList.toggle("change");
        nav.classList.toggle("move");
    }

});