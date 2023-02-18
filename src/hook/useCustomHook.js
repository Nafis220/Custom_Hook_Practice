import { useState } from "react";

const useCustomHook = ({ initial = 0, upperBound = 15, lowerBound = 5 }) => {
  const [counter, setCounter] = useState(initial);
  const increment = () => {
    if (counter < upperBound) {
      setCounter((preCount) => preCount + 1);
    }
  };
  const decrement = () => {
    if (counter > lowerBound) {
      setCounter((preCount) => preCount - 1);
    }
  };
  return {
    counter,
    increment,
    decrement,
  };
};
export default useCustomHook;
