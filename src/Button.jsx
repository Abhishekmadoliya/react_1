import React from 'react'

function Button() {
    let count  = 0;

// const handleclick = (name) => {
//             if(count<3){
//                 count ++;
//                 console.log(`${name} you clicked me ${count} times`);

//             }
//             else{
//                 console.log(`${name} stop clicking me `);
//             }
//         }

// const handleclick2 = (name) =>
//     console.log( `${name} stop clicking me`);

        
const handleclick = (e) => {
    console.log(e);

}
    
    return (<button onClick = {(e) => handleclick(e)} > Click me </button>
  )
}

export default Button