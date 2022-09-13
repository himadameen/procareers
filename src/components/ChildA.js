import React, { useState } from 'react';
import ChildB from './ChildB';



const ChildA = () => {

  const [shown, setShown] = useState(false);

  const click = () => {
    setShown(true);
  }
  const handleClick = () => {
    setShown(false);
  }

  return (
    <>
    <div className='childA'>
      <h1>UseContext <span>Example</span></h1>
      <br />
      <div className='btn'>
      <button onClick={click}>Show Data !</button>
      <button onClick={handleClick}>Hide Data !</button>
      </div>
      {shown && <ChildB />}
    </div>
    </>
  )
}

export default ChildA