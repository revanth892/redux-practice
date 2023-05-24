import React from "react";
import {useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import {increment,incrementBy,decrement,decrementBy} from "./slices/valueSlicer"

function App() {

  const dispatch=useDispatch();
  const number=useSelector((state)=>state.value.amt);
  const[no,setNo]=useState(0);
  const setby=(item)=>
  {
    // e.preventDefault();
    setNo(item);
    console.log(no);
  }
  console.log(no);
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <input onChange={(e)=>setby(e.target.value)} placeholder="set a value"></input>
      <button onClick={()=>dispatch(incrementBy(no))}>increase by{no}</button>
      <button onClick={()=>dispatch(decrementBy(no))}>decrease by{no}</button>
    </div>
  );
}

export default App;
