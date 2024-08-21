// import는 최상단에 기록
import ml from "./mdate.js";

window.addEventListener("DOMContentLoaded", () => {
    const sel = document.querySelector("select");
    const logoB = document.querySelector(".logo b");
    const logoSpan = document.querySelector(".logo span");
    const gnba = document.querySelectorAll(".gnb a");
    const s1B = document.querySelectorAll("#sec1 b");
    const s1Span = document.querySelectorAll("#sec1 span");
    const secTit = document.querySelector("section h2");

    // 섹션2
    const section2ItemTitle = document.querySelectorAll("#sec2 h3");
    const section2ItemImg = document.querySelectorAll("#sec2 img");
    // 섹션3
    const section3ItemTitle = document.querySelectorAll("#sec3 h3");
    const section3ItemImg = document.querySelectorAll("#sec3 img");

    const addr = document.querySelector(".addr");

    sel.onchange = (e) => {
        // value 속성은 select의 option 값을 가져온다.
        let opt = e.currentTarget.value;
        let data = ml[opt];

        //로고 변경
        // 객체.setAttribute("HTML속성", "값") -> HTML의 속성값을 변경
        logoB.innerText = data["mtit"][0];
        logoSpan.innerText = data["mtit"][1];

        // 글로벌 내비게이션 변경
        gnba.forEach((ele, idx) => ());

        // 섹션1 메인 타이틀 변경
        s1B.innerText = date["mtit"][0];
        s1Span.innerText = date["mtit"][1];

        // 섹션의 제목2 변경
        secTit.forEach((ele, idx) => {
            if (idx === 0)  (ele.innerText = date["sectit"][idx])
        });

        // 섹션2의 아이템 제목 변경
        section2ItemTitle.forEach((ele, idx) => (ele.innerHTML = data["s2"]["tit"][idx]));

        // 섹션2의 아이템 이미지 변경
        section2ItemImg.forEach((ele, idx) => (ele.setAttribute("src", `${date["s2"]["img"][idx]}`)));

        //푸터 로고 변경
        flogo.setAttribute("src", `${data["flogo"]} `);

        // 주소 변경
        addr.innerText = data["addr"];
    };
});