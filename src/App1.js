import React, { useState } from "react";
import useCustomHook from "./hook/useCustomHook";
const UseHook = ({ increment, decrement, count }) => {
  return (
    <>
      <h2> {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};
export default function App() {
  const { increment, decrement, counter } = useCustomHook({
    initial: 5,
    upperBound: 7,
    lowerBound: 2,
  });
  const {
    increment: increment2,
    decrement: decrement2,
    counter: counter2,
  } = useCustomHook({});

  return (
    <div>
      {/* <UseHook increment={increment} decrement={decrement} count={counter} />
      <UseHook increment={increment} decrement={decrement} count={counter} /> */}
      {/* <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> */}
      <UseHook count={counter} increment={increment} decrement={decrement} />
      <UseHook count={counter2} increment={increment2} decrement={decrement2} />
    </div>
  );
}
