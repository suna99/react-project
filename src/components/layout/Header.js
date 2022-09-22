import React from "react";

function Header(props) {
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            <img src="./assets/img/logo.jpg" alt="subway logo" />
          </a>
        </div>
        <nav className="header__menu">
          <ul>
            <li>
              <a href="/">메뉴소개</a>
            </li>
            <li>
              <a href="/">이용방법</a>
            </li>
            <li>
              <a href="/">새소식</a>
            </li>
            <li>
              <a href="/">써브웨이</a>
            </li>
            <li>
              <a href="/">가맹점</a>
            </li>
          </ul>
        </nav>
        <div className="header__member">
          <a href="/">로그인</a>
        </div>
        <div className="menu">
          <span>menu</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
