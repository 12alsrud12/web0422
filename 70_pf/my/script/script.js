// ready 이벤트
$(() => {
    const ye = $("#clock span").eq(0);
    const mo = $("#clock span").eq(1);
    const da = $("#clock span").eq(2);
    const we = $("#clock span").eq(3);
    const ho = $("#clock span").eq(4);
    const mi = $("#clock span").eq(5);
    const se = $("#clock span").eq(6);

    // 1초마다 clock 호출
    setInterval(clock, 1000);

    function clock() {
        // d라는 날짜 인스턴스 생성
        const d = new Date();

        // 날짜/시간 값 가져오기
        let yea = d.getFullYear();
        let mon = d.getMonth() + 1; //0~11
        let dat = d.getDate(); //0~11
        let wee = d.getDay(); // 0(일)~6(토)
        let hou = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();

        const weeks = ["일", "월", "화", "수", "목", "금", "토"];

        // 출력
        ye.text(yea + "년");
        mo.text(zeroAdd(mon) + "월");
        da.text(zeroAdd(dat) + "일");
        we.text(weeks[wee] + "요일");
        ho.text(zeroAdd(hou));
        mi.text(zeroAdd(min));
        se.text(zeroAdd(sec));

        // 한 자리 번호를 2자로 표시
        // 예) 0~9는 00~09로 표기
        function zeroAdd(num) {
            // 삼항 연산자
            // 조건 ? 참 : 거짓
            return num < 10 ? (num = "0" + num) : (num = num);
        }
    } // clock_fn

    /* 
    event.pageX ~ 마우스 이벤트가 발생할 때 마우스 포인터의 문서 상대 X 좌표(읽기 전용)
    event.pageY ~ 마우스 이벤트가 발생할 때 마우스 포인터의 문서 상대 Y 좌표(읽기 전용)
    */
    let mp = document.querySelectorAll('.mp');

    document.body.onmousemove = () => {
        mm(0);
        mm(1);
    };

    function mm(i) {
        let x = event.pageX - mp[i].offsetWidth / 2;
        let y = event.pageY - mp[i].offsetWidth / 2;

        mp[i].style.left = x + 'px';
        mp[i].style.top = y + 'px';
    }
}); // ready
