import { useEffect, useState } from "react";
import './counter.css';
import { Button } from "../../atoms/Button";


 export const Counter = () => {

const initialCounterValue = 0;

const [count, setCount] = useState(initialCounterValue);
// const [data, setData] = useState(null);


  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => (prev > initialCounterValue ? prev - 1 : initialCounterValue));
  };

  const handleReset = () => {
    setCount(initialCounterValue);
  };

// Fetching data from an API
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //       const json = await response.json();
  //       setData(json);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  // Given a string("IndiaIsCountryIamfromIndiaILiveInIndia"), The print  each character  with its count with descending order count using  js features. 
  
  // *string is case insensitive

//   const countCharacterString= (str:string) => {
//     const count = {};

//     for(const char of str){
//       count[char] = (count[char] || 0) +1;
// }

//     const sortedCount = Object.entries(count).sort((a, b) => b[1] - a[1]);

//     const sortedResult = new Map();
//     for(const[char, freq] of sortedCount){
//       sortedResult.set(char, freq);
//     }
    
    
//     return sortedResult;

//   }


  // const output = countCharacterString("IndiaIsCountryIamfromIndiaILiveInIndia");

  // console.log("Character count in descending order:", output);

 

// Use dev-id or online compilar to run program
 
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

