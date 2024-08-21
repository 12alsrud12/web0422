// 객체
const ml = {
    // 영어
    "en": {
        "logo": "../70_pf/daewoo/assets/en/logo.png",
        "gnb": ["About Us", "Business", "PR Center", "Contact"],
        "tit": ["GREAT", "POSSIBILITY"],
        "flogo": "../70_pf/daewoo/assets/en/footer_logo.png",
        "fmenu": ["About DAEWOO E&C", "Sitemap", "Contact", "Email Security"],
        "addr": "04548 DAEWOO E&C 170 Eulji-ro, Jung-gu, Seoul, Republic of Korea"

    },
    // 한국어
    "ko": {
        "logo": "../70_pf/daewoo/assets/ko/logo.png",
        "gnb": ["회사소개", "사업분야", "홍보센터", "고객센터"],
        "tit": ["BUILD", "TOGETHER"],
        "flogo": "../70_pf/daewoo/assets/ko/footer_logo.png",
        "fmenu": ["회사소개", "사이트맵", "개인정보처리방침", "이메일수집거부"],
        "addr": "04548 서울특별시 중구 을지로 170 ㈜대우건설"
    }
};
// 기본 데이터 내보내기 - 1개만
export default ml;
// 명명된 데이터 내보내기 export { ml, 객체명, 객체명, ...,}
export { ml };
