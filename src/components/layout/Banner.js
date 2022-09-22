import React from "react";

function BannerInfo(props){
  return (
    <span className="small">{props.subTitle}</span>
    <h3 className="title">
      {props.title}
    </h3>
    <p className="desc">
      {props.desc}
    <br />
    <a
      href={props.youtube}
      title={props.youtubeTitle}
      target="_blank"
    >
      {props.youtubeTitle}
    </a>
    </p>
  );
}

const bannerText=[{
  subTitle: "새소식",
  title: "오늘의 서브웨이",
  desc:`"잘 나가는 거" 이탈리안 비엠티 “추천하는 거” 써브웨이 클럽 <br />
      지금 써브웨이에서 “잘 나가는 거”, “추천하는 거”를 주문해보세요!`,
  youtube: "https://www.youtube.com/watch?v=jDU-TJK4vwI",
  youtubeTitle:"오늘의 서브웨이 보러가기",
  }
];

function Banner(props) {
  return (
    <section
      id="bannerType"
      className={`banner__wrap ${props.skill[0]}  ${props.skill[1]}`}
    >
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        {bannerText.map((txt)=>(
          <BannerInfo 
            key = {txt.title},
            subTitle = {txt.subTitle},
            title = {txt.title},
            desc = {txt.desc},
            youtube = {txt.youtube},
            youtubeTitle = {txt.youtubeTitle},
          />
        ))}
      </div>
    </section>
  );
}

export default Banner;
