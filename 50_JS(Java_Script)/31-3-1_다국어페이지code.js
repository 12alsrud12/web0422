// import는 최상단에 기록
import mi from "31-3-1_다국어페이지date.js";

window.addEventListener("DOMContentLoaded", () => {
    const sel = document.querySelector("select");
    const logo = document.querySelector(".logo img");
    const gnb = document.querySelectorAll(".gnb a");
    const tit = document.querySelectorAll(".tit span");
    const flogo = document.querySelector(".flogo img");
    const fmenu = document.querySelectorAll(".fmenu a");
    const addr = document.querySelector(".addr");

    //console.log(sel,logo,gnb,tit,flogo,fmenu,addr);

    /* 
        이벤트 종류
            onclick -> 요소를 클릭했을 때
            onMouseEnter -> 마우스를 요소 위에 올렸을 때
            onMouseLeave -> 마우스가 요소를 벗어났을 때
            onchange -> select 태그에서 옵션을 다른옵션을 선택했을 때
            CSS의 hover은 onMoustEnter,onMouseLeave 가 합쳐져 있다.
    */

    sel.onchange = (e) => {
        // value 속성은 select의 option 값을 가져온다.
        let opt = e.currentTarget.value;
        let data = ml[opt];

        //로고 변경
        // 객체.setAttribute("HTML속성", "값") -> HTML의 속성값을 변경
        logo.setAttribute("src", `${data["logo"]}`);
        console.log(data["logo"]);

        // 메인 타이틀 변경
        tit.forEach((ele, idx) =>
            ele.innerText = data["tit"][idx]);

        // 메뉴 변경
        gnb.forEach((ele, idx) =>
            ele.innerText = data["gnb"][idx]);

        // 푸터 메뉴 변경
        fmenu.forEach((ele, idx) =>
            ele.innerText = data["fmenu"][idx]);

        //푸터 로고 변경
        flogo.setAttribute("src", `${data["flogo"]}`);
        console.log(data["flogo"]);

        // 주소 변경
        addr.innerText = data["addr"];
    };
});