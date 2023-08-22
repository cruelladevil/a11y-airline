import React, { useState } from 'react';
import './SpinButton.css';

const MAX_ADULT_PASSENGER = 3;
const MIN_ADULT_PASSENGER = 0;

const SpinButton: React.FC = () => {
  const [count, setCount] = useState(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const increment = () => {
    if (count === MAX_ADULT_PASSENGER) return;

    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count === MIN_ADULT_PASSENGER) return;

    setCount((prevCount) => prevCount - 1);
  };

  const toggleTooltip = () => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className="spinButtonContainer">
      <div>
        <h1>승객 선택</h1>
        <div className="spinButtonLabel">
          <label htmlFor="adultCount">성인</label>
          <div
            role="tooltip"
            tabIndex={0}
            className="helpIcon"
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
            onFocus={toggleTooltip}
            onBlur={toggleTooltip}
          >
            ?{isTooltipVisible && <span className="tooltip">최대 인원수는 3명까지 가능합니다</span>}
          </div>
        </div>
        <button aria-label="성인 탑승자 한명 줄이기 버튼" onClick={decrement} className="spinButton" type="button">
          -
        </button>
        <input id="adultCount" type="text" role="spinbutton" className="spinButtonInput" value={count} readOnly />
        <button aria-label="성인 탑승자 한명 늘리기 버튼" onClick={increment} className="spinButton" type="button">
          +
        </button>
      </div>
    </section>
  );
};

export default SpinButton;
