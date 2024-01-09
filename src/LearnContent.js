import React from 'react'
// use sate hook
import { useState } from 'react';
const Content = () => {

  const [name, setName]  = useState("Earn");
  function handleNameChange(){
        const names=["earn","grow","make","give"];
        const int=Math.floor(Math.random()*4);
        setName(names[int]);
    }
    // const handleClick2 = (name) => {
    //   console.log(`Thanks for visiting my page ${name}`);
    // }
    // const handleClick = (e) => {
    //   console.log(e.target.innerText);
    // }
    //useState function returns an array [currentState,UpdatingState]
    // const [count,setCount]=useState(99);//99- default value
    // function incrementFunction(){
    //   //were using fn in setCOunt to perform multiple actions on count(prevCount), if we're not using fn the count value will be same in all the laces insode a fn.
    //   setCount(prevCount => prevCount+1);
    // }
    // function decrementFunction(){
    //   setCount(prevCount => prevCount-1);
    // }


  return (
   <main>
        <p>Let's {name} Money</p>
        <button onClick={handleNameChange}>Press here</button>

         {/* we use anonymous function () =>  before handleClick because the handle click performs action before actually pressing the button */}
        {/* <button onClick={ () => handleClick('Sunil')}>Press here</button> */}
        
        {/* <button onClick={decrementFunction} >-</button>
        <span>{count}</span>
        <button onClick={incrementFunction} >+</button> */}


    </main>
    
  )
}

export default Content