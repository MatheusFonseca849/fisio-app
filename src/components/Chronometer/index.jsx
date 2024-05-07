import { useState, useRef, forwardRef } from "react";

const Chronometer = ({ labelText, titleSize }) => {
  const [time, setTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
        setTime(Date.now())
    }, 20);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let timePassed = ( time - now ) / 1000;

  return (
    <div>
      <h3>{labelText}</h3>
      <span className="chronometer">{timePassed}</span>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default forwardRef(Chronometer);
