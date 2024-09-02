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
function ReactUi(uiitem) {
    return (
        <li className="ui-card">
            <div className="ui-img">
                <img src={uiitem.uiimg} alt={uiitem.uiimgnum} />
            </div>
            <div className="ui-bx">
                <h4>{uiitem.uititle}</h4>
                <p>{uiitem.uilike}<span className="gray">{uiitem.uisublike}</span></p>
                <p className="gray">{uiitem.uidetails}</p>
                <h3>{uiitem.uiprice}원</h3>
            </div>
        </li>
    );
}

// App 컴포넌트
function App() {
    return (
        <ul className="ui-card-list">
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
root.render(<App />);