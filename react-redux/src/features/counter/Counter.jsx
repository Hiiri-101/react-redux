import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import { useState } from "react";

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2');
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div>
      <div>
        <button onClick={()=> dispatch(increment())}>Increment</button>
      </div>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input
        type="text"
        value={incrementAmount}
        onChange={e => setIncrementAmount(e.target.value)}
      />
      <button onClick={() =>
        dispatch(incrementByAmount(incrementAmount) || 0)}
      >Add Amount</button>

  </div>
  )
}