import React from "react";

function Footer(props) {
  return (
    <footer
      id="footerType"
      className={`footer__wrap ${props.skill[0]}  ${props.skill[1]} ${props.skill[2]}`}
    >
      <h2 className="blind">푸터 영역</h2>
      <div className="footer__inner container">
        <div className="footer__menu">
          <div>
            <h3>사이트</h3>
            <ul>
              <li>
                <a href="/">웹표준 사이트</a>
              </li>
              <li>
                <a href="/">반응형 사이트</a>
              </li>
              <li>
                <a href="/">패럴랙스 사이트</a>
              </li>
              <li>
                <a href="/">포트폴리오 사이트</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>헤더 유형</h3>
            <ul>
              <li>
                <a href="/">헤더 01</a>
              </li>
              <li>
                <a href="/">헤더 02</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>슬라이드 유형</h3>
            <ul>
              <li>
                <a href="/">슬라이드 01</a>
              </li>
              <li>
                <a href="/">슬라이드 02</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>이미지 유형</h3>
            <ul>
              <li>
                <a href="/">이미지 01</a>
              </li>
              <li>
                <a href="/">이미지 02</a>
              </li>
              <li>
                <a href="/">이미지/텍스트 01</a>
              </li>
              <li>
                <a href="/">이미지/텍스트 02</a>
              </li>
              <li>
                <a href="/">텍스트 01</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>카드 유형</h3>
            <ul>
              <li>
                <a href="/">카드 01</a>
              </li>
              <li>
                <a href="/">카드 02</a>
              </li>
              <li>
                <a href="/">카드 03</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>푸터 유형</h3>
            <ul>
              <li>
                <a href="/">푸터 메뉴 01</a>
              </li>
              <li>
                <a href="/">푸터 컨택트 02</a>
              </li>
              <li>
                <a href="/">푸터 이메일 03</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          2022 Choi SunA. Portfolio is Power
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
