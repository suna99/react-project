import React from "react";

function Slider(props) {
  return (
    <section id="sliderType" className={`slider__wrap ${props.fonts}`}>
      <h2 className="blind">슬라이드 유형</h2>
      <div className="slider__inner">
        <div className="slider">
          <div className="slider__img">
            <div className="desc">
              <span>내 손 안의 작은 써브웨이</span>
              <h3>
                <strong>말</strong>이 안나올 땐
                <br />
                <strong>손</strong>으로 주문하자!
              </h3>
              <div className="btn">
                <a href="/">자세히 보기</a>
              </div>
            </div>
          </div>
          <div className="slider__arrow">
            <a href="/" className="left">
              <span className="ir">이전 이미지</span>
            </a>
            <a href="/" className="right">
              <span className="ir">다음 이미지</span>
            </a>
          </div>
          <div className="slider__dot">
            <a href="/" className="dot active">
              <span className="ir">1</span>
            </a>
            <a href="/" className="dot">
              <span className="ir">2</span>
            </a>
            <a href="/" className="dot">
              <span className="ir">3</span>
            </a>
            <a href="/" className="play">
              <span className="ir">플레이</span>
            </a>
            <a href="/" className="stop">
              <span className="ir">정지</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
