// Hanatour fullpage.js

// 원래 document).ready 있어야하는대 생략 가능해서 시작부분에 없는 것이다.
// 풀페이지 자체에만 필요한 것.
$(function () {
    $('#wrap').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#myNav',
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
        navigation: true,
        navigationTooltips: ['section1', 'section2', 'section3', 'section4'],
        showActiveTooltip: true,
        //slidesNavigation: true,
        //loopHorizontal: false,
    });
});

/* 위 보면 [] 이게 있는대
    데이터 유형
        1. 숫자
        2. 문자열
        3. 불리엇 (true, false)
        4. undefined, ...,

        위 4개를 다 사용하고 쓰는게
        5. 객체: {속성:값, 속성:값, ...,}
            - 배열: [값,값,값,값, ...,]
                예) sectionColor: [#f2f2f2, #f2f2f2 #f2f2f2, ...,]

                    - sectionColor = 객체 | [#f2f2f2,~...] = 배열

                    - 함수는 함수 끼리 컬러면 컬러색 끼리 (서로 다른 유형의 값을 못   
                      넣는다.)

    배열에 쓰는 용도다.
*/
