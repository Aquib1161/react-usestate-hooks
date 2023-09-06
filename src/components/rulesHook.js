// Always write it inside the component or function
// Component must be PascalCase (first letter should be uppercase)
// We can directly import or we can directly write it using React.hookName.
// Don't call Hooks inside loopa,condition,or nested functions.


import React, { useState } from 'react'

const RulesHook = () => {
  const [myName,setMyName] = useState('aquib khan');
  return (
    <div>
      <h1>{myName}</h1>
    </div>
  )
}

export default RulesHook
