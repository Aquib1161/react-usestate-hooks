import React, { useState } from 'react'

const UseStateArray = () => {

  const bioData = [
    {
      id: 0, myName: "akib", age: 20
    },
    {
      id: 1, myName: "Khan", age: 22
    },
    {
      id: 2, myName: "Khan", age: 26
    }
  ]
   
  const [myArray,setmyArray] = useState(bioData);
  const clearArray =() =>{
    setmyArray([]);
  }

  console.log(bioData);
  return (
    <>
      {/* <h1>My name is khan  </h1> */}
      {
        myArray.map((curElm) => {
          return <h1 key={curElm.id}>Name : {curElm.myName} & Age:{curElm.age}</h1>
        })
      }

      <button onClick={clearArray}> Clear</button>

    </>
  )
}

export default UseStateArray