import React from "react";

function BannerInfo(props) {
  return (
    <div className="banner__inner">
      <span className="small">{props.smallTile}</span>
      <h3 className="title">
        {props.title}
        <span className="yellow">{props.titleYellow}</span>
      </h3>
      <p className="desc">
        {props.desc}
        <br />
        <a href={props.href} title={props.titleYellow} target="_blank">
          {props.button}
        </a>
      </p>
    </div>
  );
}

function Banner(props) {
  return (
    <section
      id="bannerType"
      className={`banner__wrap ${props.skill[0]}  ${props.skill[1]}`}
    >
      <h2 className="blind">배너 영역</h2>
      {bannerText.map((txt) => (
        <BannerInfo
          key={txt.title}
          smallTile={txt.smallTile}
          title={txt.title}
          titleYellow={txt.titleYellow}
          desc={txt.desc}
          href={txt.href}
          button={txt.button}
        />
      ))}
    </section>
  );
}

const bannerText = [{
  smallTile: "새소식",
  title: "오늘의",
  titleYellow: "서브웨이",
  desc: `“잘 나가는 거” 이탈리안 비엠티 “추천하는 거” 써브웨이 클럽
  지금 써브웨이에서 “잘 나가는 거”, “추천하는 거”를 주문해보세요!`,
  href: "https://www.youtube.com/watch?v=jDU-TJK4vwI",
  button: "오늘의 서브웨이 보러가기",
}];

export default Banner;