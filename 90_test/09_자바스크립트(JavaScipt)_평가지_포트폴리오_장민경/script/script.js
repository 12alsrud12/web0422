// 버튼 선언
const bt1 = document.querySelector('#bt1');
const bt2 = document.querySelector('#bt2');
const bt3 = document.querySelector('#bt3');
const bt4 = document.querySelector('#bt4');

// 탭 선언
const tb1 = document.querySelector('#tab1');
const tb2 = document.querySelector('#tab2');
const tb3 = document.querySelector('#tab3');
const tb4 = document.querySelector('#tab4');

// class제거용 resetT T는 tab의 앞을자를 딴 것.
function resetT() {

    tb1.classList.remove('on');
    tb2.classList.remove('on');
    tb3.classList.remove('on');
    tb4.classList.remove('on');

    bt1.classList.remove('ck');
    bt2.classList.remove('ck');
    bt3.classList.remove('ck');
    bt4.classList.remove('ck');
};

// tabs 클래스 추가 >u< !
bt1.onclick = function () {
    resetT();
    tb1.classList.add('on');
    bt1.classList.add('ck');
};

bt2.onclick = function () {
    resetT();
    tb2.classList.add('on');
    bt2.classList.add('ck');
};

bt3.onclick = function () {
    resetT();
    tb3.classList.add('on');
    bt3.classList.add('ck');
};

bt4.onclick = function () {
    resetT();
    tb4.classList.add('on');
    bt4.classList.add('ck');
};

// 확인용!!
/* 
console.log(bt1);
console.log(bt2);
console.log(bt3);
console.log(bt4);

console.log(tb1);
console.log(tb2);
console.log(tb3);
console.log(tb4); 
*/