window.addEventListener("DOMContentLoaded", () => {
    // 모달팝업
    // 요소찾기
    // 팝업창 부분
    const modal = document.querySelector("#modal");
    const popup = document.querySelector("#popup");
    const exit = document.querySelector("#popup button")
    // 공지사항 1번째 부분
    const btn1 = document.querySelectorAll("#notion ul li")[0];

    // 이벤트
    btn1.onclick = () => {
        modal.classList.add("on");
    };

    exit.onclick = () => {
        modal.classList.remove("on");
    };
});