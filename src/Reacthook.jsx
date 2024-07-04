import React, { useState } from 'react'

// React hook = special function that allow functional components
//              to use react feature without writing classes components(React v 16.8)
//              (usesate ,useEffect,useContext,useRender,useCallback, and mare...)
function Reacthook() {
  
  const [name,setname] = useState("Guest");
  const [age, setage]  = useState(0);
  const [isemployee, setemployee] = useState(false);

let upadtename = () =>{
    setname("Abhishek");
}

let updateage = () =>{
    setage(age+1);
    
}

const toggleemployee = () => {
    setemployee(!isemployee);
}
  
  
    return (
        <div>
            <p>Name:{name}</p>
            <button onClick={upadtename}>Set name</button>

            <p>Age:{age}</p>
            <button onClick={updateage}>Set age</button>

            <p>IsEmployee:{isemployee? "yes":"no"}</p>
            <button onClick={toggleemployee}>ISEMPLOYEE</button>

        </div>
  )
}

export default Reacthook