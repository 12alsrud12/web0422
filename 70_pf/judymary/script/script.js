window.addEventListener("DOMContentLoaded", () => {
    // 요소찾기

    // sec3 contents
    // sec3 button
    const bt1 = document.querySelectorAll(".btn li")[0];
    const bt2 = document.querySelectorAll(".btn li")[1];
    console.log(bt1);
    console.log(bt2);
    // sec3 tabs
    const tab1 = document.querySelectorAll(".tab")[0];
    const tab2 = document.querySelectorAll(".tab")[1];
    console.log(tab1);
    console.log(tab2);

    // tab reset
    function resetA() {
        bt1.classList.remove("on");
        bt2.classList.remove("on");
        tab1.classList.remove("on");
        tab2.classList.remove("on");
    };

    bt1.onclick = function () {
        resetA();
        bt1.classList.add("on");
        tab1.classList.add("on");
    };
    bt2.onclick = function () {
        resetA();
        bt2.classList.add("on");
        tab2.classList.add("on");
    };
})
