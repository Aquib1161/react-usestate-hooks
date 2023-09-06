import React, { useState } from 'react'
import "./App.css"
import RulesHook from './components/rulesHook';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';

const App = () => {
  // var val = 'Aquib Khan 007'
  // console.log(useState('aquib khan'));

  // let myfirstval = useState('khan')[0];
  // console.log(myfirstval);

  const [myName, setMyName] = useState('aquib khan 007');

  const changeName = () => {
    // val = "Aquib Khan"
    // console.log(val);
    let val = myName;
    if (val === 'aquib khan 007') {
      setMyName('Aquib khan')
    } else {
      setMyName('aquib khan 007')
    }

  }

  // console.log(val);
  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={changeName}>click me</button>
      <RulesHook />
      <UseStateArray />
      <UseStateObject />
    </div>
  )
}

export default App