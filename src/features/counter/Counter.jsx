import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useState } from "react";


export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2');
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div>
      <h1 className="h1 display-1">Counter Component</h1>
      <h2 className="h1 display-1 mt-5 mb-3">{count}</h2>
      <div className="mt-5">
        <button
          className="btn btn-primary mx-3"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button className="btn btn-dark mx-3" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="row">
        <div className="input-group mt-3 ">
          <input
            className="form-control"
            size="5"
            type="text"
            value={incrementAmount}
            onChange={e => setIncrementAmount(e.target.value)}
          />
          <button className="btn btn-outline-secondary" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</button>
          </div>
          </div>
      </div>

    </div>
  )
}