import React, { useState } from 'react'

function Counter() {
  
    const [count, setcount] = useState(0);

    const increment = () =>{
        setcount(count + 1);
    }

    const decrement = () =>{
        setcount(count - 1);
        
    }

    const reset = () =>{
        setcount(0);
    }

  
    return (
        <>
        <div className='counter-container'>
        <h1 className='count-display'>{count}</h1>
        <button className='counter-button' onClick={increment}>INCREMENT</button>
        <button className='counter-button' onClick={reset}> RESET</button>
        <button className='counter-button' onClick={decrement} >DECREMENT</button>
        </div>
        </>
  )
}

export default Counter