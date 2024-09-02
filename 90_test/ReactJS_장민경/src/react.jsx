import { uiCard } from "./card.jsx";

// React HTML작성
function ReactUi(uiCard) {
    return (
        <div className="ui-card">
            <div className="ui-img">
                <img src="{uiCard.uiImg}" alt="{uiCard.uiImgNum}" />
            </div>
            <div className="ui-bx">
                <h4>{uiCard.uiTitle}</h4>
                <p>{uiCard.uiLike}<span className="gray">{uiCard.uiSubLike}</span></p>
                <p className="gray">{uiCard.uiDetails}</p>
                <h3>{uiCard.uiPrice}</h3>
            </div>
        </div>
    );
}

// App 컴포넌트
function App() {
    return (
        <ul className="container">
            {cards.map((item, idx) => (
                <Card
                    key={idx}
                    mimg={item.uiImg}
                    mtit={item.uiImgNum}
                    mage={item.uiTitle}
                    mrate={item.uiLike}
                    mdate={item.uiSubLike}
                    mheart={item.uiDetails}
                    mheart={item.uiPrice}
                />
            ))}
        </ul>
    );
}

// 출력
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);