
// PROPS/PROPTYPES EXAMPLES 
import React from 'react';
// import defaultProps from 'react'

import prototype from 'prop-types';


// props: a machanism to pass data from one component to another 
// proptypes: a machanism that ensure that the paased value is of the correct datatype .
// =defaultprop = default values for props in case thry are not passed 

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student:{props.isstudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

Student.defaultprops = {
  name: "abhi",
  age: 20,
  isstudent : true,

};



export default Student;
