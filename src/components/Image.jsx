import React from "react";

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.skill[0]}  ${props.skill[1]}`}
    >
      <h2>Subway's Menu</h2>
      <div className="tab">
        <ul>
          <li className="active">
            <a href="#">클래식</a>
          </li>
          <li>
            <a href="#">프레쉬&라이트</a>
          </li>
          <li>
            <a href="#">프리미엄</a>
          </li>
          <li>
            <a href="#">아침메뉴</a>
          </li>
        </ul>
      </div>
      <div className="image__inner container">
        <article className="image img1">
          <h3 className="image__title">에그마요</h3>
          <p className="image__desc">
            부드러운 달걀과 고소한 마요네즈가 만나 <br />더 부드러운 스테디셀러
          </p>
          <a className="image__btn" href="/">
            자세히 보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">이탈리안 비엠티</h3>
          <p className="image__desc">
            페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화! <br />
            전세계가 사랑하는 써브웨이의 베스트셀러!
          </p>
          <a className="image__btn" href="/">
            자세히 보기
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
