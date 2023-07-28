import React, { useState } from 'react';
import './SpinButton.css';

const SpinButton: React.FC = () => {
  const [count, setCount] = useState(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
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
          <label>성인</label>
          <div className="helpIcon" onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
            ?{isTooltipVisible && <span className="tooltip">최대 인원수는 3명까지 가능합니다</span>}
          </div>
        </div>
        <button onClick={decrement} className="spinButton">
          -
        </button>
        <input type="text" role="spinbutton" readOnly className="spinButtonInput" value={count} />
        <button onClick={increment} className="spinButton">
          +
        </button>
      </div>
    </section>
  );
};

export default SpinButton;
