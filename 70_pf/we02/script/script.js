$(function () {
    // 슬라이드 영역
    let idx = 0;
    // 1초 마다 autoSlide 호출
    setInterval(autoSlide, 2000);

    function autoSlide() {
        (idx === 2) ? (idx = 0) : idx++;

        $("#slide li").eq(idx)
            .fadeIn(1000, function () {
                if (idx === 0) idx = 3;
                $("#slide li")
                    .eq(idx - 1)
                    .fadeOut(1000);
                if (idx === 3) idx = 0;
            });
    };
});