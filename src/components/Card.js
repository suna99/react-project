import React from "react";

function CardInfo(props) {
  return (
    <article className="card">
      <figure className="card__header">
        <img src={props.img} alt={props.title} />
      </figure>
      <div className="card__body">
        <h3 className="title">{props.title}</h3>
        <p className="desc">{props.desc}</p>
        <a className="btn" href="/">
          more
          <span aria-hidden="true">
            <svg
              width="52"
              height="8"
              viewBox="0 0 52 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                fill="#009743"
              />
            </svg>
          </span>
        </a>
      </div>
    </article>
  );
}

const cardText = [
  {
    img: "../assets/img/card_bg01.jpg",
    title: "이달의 썹!프라이즈",
    desc: `이달의 썹!프라이즈로 로티세리 바베큐 샌드위치 15cm + 음료 16oz가
    7,600원입니다. 본 프로모션은 9월 1일부터 10월 31일까지 진행되며 매장
    구매 및 Fast-Sub 이용 시에만 적용 가능합니다! 프로모션 상품은 1인당
    최대 5개 구매 가능합니다.`,
  },
  {
    img: "../assets/img/card_bg02.jpg",
    title: "써브웨이 클래식",
    desc: `잘 나가는거 이탈리안 B.M.T, 추천하는 거 써브웨이 클럽!
    썹.알.못부터 썹.잘.알까지 모두 쉽게 즐겨요. 써브웨이 클래식!
    써브웨이를 가장 쉽게 즐길 수 있는 베스트 조합을 알려드립니다.`,
  },
  {
    img: "../assets/img/card_bg03.jpg",
    title: "버섯이 왔썹!",
    desc: `버섯이 왔썹! 머쉬룸 샐러드와 머쉬룸 썹을 즐겨보세요! 머쉬룸은 기간
    한정으로 판매되는 제품으로 조기 소진 시 판매가 종료될 수 있으며,
    매장별 판매 종료 시점은 상이할 수 있습니다. 비용 추가 시 세트
    메뉴로 즐기실 수 있습니다.`,
  },
];

function Card(props) {
  return (
    <section
      id="cardType"
      className={`card__wrap ${props.skill[0]}  ${props.skill[1]}`}
    >
      <h2>What's News</h2>
      <p>
        써브웨이의 다양한 소식을
        <br />
        빠르게 전달해드립니다.
      </p>
      <div className="card__inner container">
        {cardText.map((txt) => (
          <CardInfo
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

export default Card;