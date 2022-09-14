import React from "react";

function Banner(props) {
  return (
    <section
      id="bannerType"
      className={`banner__wrap ${props.skill[0]}  ${props.skill[1]}`}
    >
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <span className="small">새소식</span>
        <h3 className="title">
          오늘의
          <span className="green">서브웨이</span>
        </h3>
        <p className="desc">
          “잘 나가는 거” 이탈리안 비엠티 “추천하는 거” 써브웨이 클럽 <br />
          지금 써브웨이에서 “잘 나가는 거”, “추천하는 거”를 주문해보세요!
          <br />
          <a
            href="https://www.youtube.com/watch?v=jDU-TJK4vwI"
            title="오늘의 서브웨이 보러가기"
            target="_blank"
          >
            오늘의 서브웨이 보러가기
          </a>
        </p>
      </div>
    </section>
  );
}

export default Banner;
