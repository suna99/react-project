import React from "react";

function ImgTextInfo(props) {
  return (
    <div className="imgText__txt">
      <span className="small">{props.smallTitle}</span>
      <h3 className="title">
        {props.title}
      </h3>
      <p className="desc">
        {props.desc}
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
  );
}


function ImgTxtSideInfo(props) {
  return (
    <div className={`imgText__img ${props.className}`}>
      <a href="/">{props.button}</a>
    </div>
  );
}

function ImgText(props) {
  return (
    <section
      id="imgTextType"
      className={`image__wraps ${props.skill[0]}  ${props.skill[1]}  ${props.skill[2]}`}
    >
      <h2 className="blind">이용방법</h2>
      <div className="imgText__inner container">
        {imgTxtText.map((txt) => (
          <ImgTextInfo
            key={txt.title}
            smallTitle={txt.smallTitle}
            title={txt.title}
            desc={txt.desc}
          />
        ))}

        <div className='imgText__img__wrap'>
          {imgTxtSide.map((txt) => (
            <ImgTxtSideInfo
              key={txt.className}
              className={txt.className}
              button={txt.button}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const imgTxtText = [{
  smallTitle: "이용방법",
  title: `서브웨이를\n이용하는 방법`,
  desc: `언제 어디서든 서브웨이를 맛있게 즐길 수 있도록 항상 도와
드리겠습니다.`,
}
];

const imgTxtSide = [
  {
    className: "img1",
    button: "서브웨이 이용방법",
  },
  {
    className: "img2",
    button: " 단체메뉴 이용방법",
  }
];

export default ImgText;
