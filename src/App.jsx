import './App.css'
import { useState } from 'react'

function App() {
 const [count, setCount] = useState(0);
 function Adding(){
  if(count < 21){
  setCount(count + 1);
  // setCount(count + 1);
  // setCount(count + 1);
  // setCount(count + 1); // after fiber algorithm, things update in bunch so this will add only 1.

  // so to make it work we use multiple state("prevvalue") concept.
  setCount(prevValue => prevValue + 1);
  setCount(prevValue => prevValue + 1);
  } 
 }

 function Subtracting(){
  if(count > 0){
  setCount(count - 1);
  setCount(prevValue => prevValue - 1);
  setCount(prevValue => prevValue - 1);
  }
 }

  return (
    <>
    <h1>React Add or Subtract from 0-21.</h1>
    <h2>Count: {count}</h2>
    <button onClick={Adding}>Add</button>
    <button onClick={Subtracting} >Subtract</button>
    </>
  )
}

export default App
