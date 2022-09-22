import React from "react";

function ImageInfo(props) {
  return (
    <article className="image">
      <img src={props.img} />
      <h3 className="image__title">{props.title}</h3>
      <p className="image__desc">
        {props.desc}
      </p>
      <a className="image__btn" href="/">
        자세히 보기
      </a>
    </article>
  );
}

const imageText = [
  {
    title: "에그마요",
    desc: `부드러운 달걀과 고소한 마요네즈가 만나
    더 부드러운 스테디셀러`,
    img: "../assets/img/image_bg01.jpg",
  },
  {
    title: "이탈리안 비엠티",
    desc: `햄이 만들어내는 최상의 조화!
    전세계가 사랑하는 써브웨이의 베스트셀러!`,
    img: "../assets/img/image_bg02.jpg",
  }
];

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.skill[0]}  ${props.skill[1]}`}
    >
      <h2>Subway's Menu</h2>
      <div className='mob_more'> more </div>
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
        {imageText.map((txt) => (
          <ImageInfo
            key={txt.title}
            title={txt.title}
            desc={txt.desc}
            img={txt.img}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
