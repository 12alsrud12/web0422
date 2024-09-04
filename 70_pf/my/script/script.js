(() => {
    // 년 월 일 요일
    const ya = $("span").eq(0);
    const mo = $("span").eq(1);
    const da = $("span").eq(2);
    const we = $("span").eq(3);
    // 시 분 초
    const ho = $("span").eq(4);
    const mi = $("span").eq(5);
    const se = $("span").eq(6);

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
        ya.text(yea + "년");
        mo.text(zeroAdd(mon) + "월");
        da.text(zeroAdd(dat) + "일");
        we.text(wee + "요일");
        ho.text(zeroAdd(hou));
        mi.text(zeroAdd(min));
        se.text(zeroAdd(sec));

        function zeroAdd(num) {
            // 0~9는 00~09로 표기
            return num < 10 ? (num = "0" + num) : (num = num);
        }
    }; // clock_fn
});
