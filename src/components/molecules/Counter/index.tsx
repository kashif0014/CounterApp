import { useState } from "react";
import './counter.css';
import { Button } from "../../atoms/Button";


 export const Counter = () => {

const initialCounterValue = 0;

const [count, setCount] = useState(initialCounterValue);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => (prev > initialCounterValue ? prev - 1 : initialCounterValue));
  };

  const handleReset = () => {
    setCount(initialCounterValue);
  };

  const disabledButton = count === initialCounterValue;

  return (

    <div className="counter">
      <h1 className='counter__title'>My Counter App</h1>
    <div className="counter__controls">
      
      <Button onClick={handleDecrement} disabled={disabledButton}> - </Button>
        <span className="counter__value">{count}</span>
      <Button onClick={handleIncrement} > + </Button>
    </div>
    <Button onClick={handleReset} disabled={disabledButton}>
      Reset
    </Button>
  </div>
  );

};

