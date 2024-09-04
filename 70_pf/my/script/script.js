window.addEventListener("DOMContentLoaded", () => {
    // 년 월 일 요일
    const ya = document.querySelectorAll("span")[0];
    const mo = document.querySelectorAll("span")[1];
    const da = document.querySelectorAll("span")[2];
    const we = document.querySelectorAll("span")[3];
    // 시 분 초
    const ho = document.querySelectorAll("span")[4];
    const mi = document.querySelectorAll("span")[5];
    const se = document.querySelectorAll("span")[6];

    // 1초마다 clock 호출
    setInterval(clock, 1000);

    function clock() {
        // d라는 날짜 인스턴스 생성
        const d = new Date();

        // 날짜/시간 값 가져오기
        let yea = d.getFullYear();
        let mon = d.getMonth() + 1; /* 이걸 해야 제대로 월이 나타난다. */
        let dat = d.getDate();
        let wee = d.getDay();

        let hou = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();

        // 요일추가 반드시 출력 이전에 해야한다!
        switch (wee) {
            case 0: wee = "일"; break;
            case 1: wee = "월"; break;
            case 2: wee = "화"; break;
            case 3: wee = "수"; break;
            case 4: wee = "목"; break;
            case 5: wee = "금"; break;
            default: wee = "토"; break;
        };

        // 출력
        ya.innerText = yea + "년";
        mo.innerText = ze(mon) + "월";
        da.innerText = ze(dat) + "일";
        we.innerText = wee + "요일";
        ho.innerText = ze(hou);
        mi.innerText = ze(min);
        se.innerText = ze(sec);

        function ze(num) {
            // 0~9는 00~09로 표기
            return num < 10 ? (num = "0" + num) : (num = num);
        };
    }; // clock_fn
});