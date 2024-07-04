import React, { useState } from 'react'

function MyComponent() {

const [car,setcar]=useState();
const [carYear,setcaryear] = useState(new Date().getFullYear());
const [carmake,setcarmake] = useState("");
const [carmodal,setcarmodal] = useState("");

function Handleyearchange(){


}

function Handleddcar(){

}
function Handlecarremove(index){

}






  return (

    <div>

        <h1>List of Car Object</h1>

        <input type="number" value={carYear} onChange={handleyearchange} />
        <input type="text" value={carmake} onChange={handlemodalchange}/>
        {/* <input type="text" value={}/> */}
    </div>

  )
}

export default MyComponent