import React from "react";

function Text(props) {
  return (
    <section
      id="textType"
      className={`image__wrap ${props.skill[0]}  ${props.skill[1]}`}
    >
      <span>써브웨이</span>
      <h2 className="mb70">Sort of Subway</h2>
      <div className="text__inner container">
        <div className="text t1">
          <h3 className="text__title">Sandwich</h3>
          <p className="text__desc">
            클래식/프래쉬&라이트/프리미엄/신제품 등등 전세계 넘버원 브랜드
            Subway! 50년 전통의 세계 최고의 샌드위치를 맛보세요!
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t2">
          <h3 className="text__title">Wrap</h3>
          <p className="text__desc">
            Subway를 더 맛있고 간편하게 즐기는 방법 최상의 레시피로 만들어진
            써브웨이 랩 시리즈, 이젠 고민하지 마세요! 그릴드 랩은 일부
            매장에서만 제공 가능합니다. 그릴드 랩을 제공하는 매장에서는
            시그니처랩을 제공하지 않습니다. 매장찾기의 매장정보를 확인해주세요.
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t3">
          <h3 className="text__title">Salad</h3>
          <p className="text__desc">
            내가 원하는 재료로 신선하게, 양은 더 많이! 칼로리는 더 적게! 신선한
            야채와 다양한 소스로 가볍게 샐러드를 즐겨보세요!
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t4">
          <h3 className="text__title">Morning Menu</h3>
          <p className="text__desc">
            아침 메뉴도 Subway와 함께, 취향대로 즐기자! 그릴드 랩과 파니니는
            일부 매장에서만 제공 가능합니다. 매장 리스트는 공지사항을
            확인해주세요.
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t5">
          <h3 className="text__title">Smile Sub</h3>
          <p className="text__desc">
            웃음이 번지는 착한 가격과 착한 맛의 스마일 썹! 스마일 썹과 함께 하루
            종일 맛있고 스마일 할 수 있도록 도와드릴게요!
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t6">
          <h3 className="text__title">Catering Menu</h3>
          <p className="text__desc">
            샌드위치/쿠키 등을 통해 특별한 순간을 더욱 특별하게 해줄 단체 메뉴를
            소개합니다. 꼭 최소 1일전 매장에 주문해주세요
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Text;
