import React from "react";

function ImgText(props) {
  return (
    <section
      id="imgTextType"
      className={`image__wrap ${props.skill[0]}  ${props.skill[1]}  ${props.skill[2]}`}
    >
      <h2 className="blind">이용방법</h2>
      <div className="imgText__inner container">
        <div className="imgText__txt">
          <span className="small">이용방법</span>
          <h3 className="title">
            서브웨이를 <br />
            이용하는 방법
          </h3>
          <p className="desc">
            언제 어디서든 서브웨이를 맛있게 즐길 수 있도록 항상 도와
            드리겠습니다.
          </p>
          <ul className="list">
            <li>
              <a href="/">서브웨이 이용방법</a>
            </li>
            <li>
              <a href="/">단체메뉴 이용방법</a>
            </li>
            <li>
              <a href="/">신선한 재료 소개</a>
            </li>
            <li>
              <a href="/">APP 이용방법</a>
            </li>
            <li>
              <a href="/">WebGL 사이트</a>
            </li>
            <li>
              <a href="/">Youtube 사이트</a>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">서브웨이 이용방법</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" className="green">
            단체메뉴 이용방법
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImgText;
