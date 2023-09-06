import React, { useState } from 'react'

const UseStateObject = () => {
  const [myObject, setMyObject] = useState({
    myName: "akib", myAge: "22", degree: "BCA"
  })
  const changeObject = () => {
    setMyObject({...myObject, myName: "akib khan"});
  }
  return (
    <div>
      <h1>Name:{myObject.myName} & Age: {myObject.myAge} & Degree : {myObject.degree }</h1>


      <button onClick={changeObject}>Update</button>
    </div>
  )
}

export default UseStateObject