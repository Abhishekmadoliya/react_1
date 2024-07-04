import React from 'react';

function List() {
  const fruits = [{name:"apple",calories:95},
   {name:"banana",calories:50},
    {name:"orange",calories:36},
     {name:"coconut",calories:153},
      {name:"pineapple",calories:37}];
  
  // Mapping over the fruits array to create JSX elements
  const fruitItems = fruits.map (()=> (
    <li>{fruitItems}</li>
  ));

  return (
    <ul>
      {fruitItems}
    </ul>
  );
}

export default List;
