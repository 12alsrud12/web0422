// 객체(Object) 생성
const uiCard = [
    {
        uiImg: "../src/ui-card-img1.png",
        uiImgNum: "UI_카드_이미지1",
        uiTitle: "라온",
        uiLike: 5,
        uiSubLike: "(2)",
        uiDetails: "부산 수영구 · 모든견종 · 무선인터넷 · 엘리베이터",
        uiPrice: "100,000"
    },
    {
        uiImg: "../src/ui-card-img2.png",
        uiImgNum: "UI_카드_이미지2",
        uiTitle: "가평 체리쉬애견팬션",
        uiLike: 0,
        uiSubLike: "(0)",
        uiDetails: "경기 가평군 · ~20kg · 소형견 · 중형견 · 애견수영장",
        uiPrice: "39,000"
    },
    {
        uiImg: "../src/ui-card-img3.png",
        uiImgNum: "UI_카드_이미지3",
        uiTitle: "도그팰리스 프리미엄 독채 글램핑",
        uiLike: 5,
        uiSubLike: "(13)",
        uiDetails: "충남 당진시 · 모든견종 ·맹견가능 · 드라이룸",
        uiPrice: "205,000"
    },
    {
        uiImg: "../src/ui-card-img4.png",
        uiImgNum: "UI_카드_이미지4",
        uiTitle: "경주 마법의성 애견펜션",
        uiLike: 4.9,
        uiSubLike: "(19)",
        uiDetails: "경북 경주시 · ~10kg · 소형견 · 애견수영장 · 애견놀이터",
        uiPrice: "70,000"
    }
];

// React HTML작성
/* 
    uiitem.여기에 아래에서 생성한 UI 컴포넌트 사용
    복수의 Ui card 출력시 사용하기위함
*/
function ReactUi(uiitem) {
    return (
        <li className="ui-card">
            <a href="">
                <div className="ui-img">
                    <img src={uiitem.uiimg} alt={uiitem.uiimgnum} />
                </div>
            </a>
            <div className="ui-bx">
                <div>
                    <h4><a href="#">{uiitem.uititle}</a></h4>
                    <p><a href="#">{uiitem.uilike}<span className="gray">{uiitem.uisublike}</span></a></p>
                    <p className="gray"><a href="#" className="gray">{uiitem.uidetails}</a></p>
                </div>
                <div>
                    <h3><a href="#">{uiitem.uiprice}원</a></h3>
                </div>
            </div>
        </li>
    );
}

// Ui 컴포넌트 / 이름: UiCard
function UiCard() {
    return (
        /* ul 내부에 ui card부분을 담당하는 li 를 각자 다른 내용으로 넣기 위해 사용 */
        <ul className="ui-card-list">
            {/* 위에서 제작한 객체uiCard를 map()메서드를 이용하여 카드당 다른 값을 넣기위해 이용 */}
            {uiCard.map((item, idx) => (
                <ReactUi
                    key={idx}
                    uiimg={item.uiImg}
                    uiimgnum={item.uiImgNum}
                    uititle={item.uiTitle}
                    uilike={item.uiLike}
                    uisublike={item.uiSubLike}
                    uidetails={item.uiDetails}
                    uiprice={item.uiPrice}
                />
            ))}
        </ul>
    );
}

// 출력
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<UiCard />);