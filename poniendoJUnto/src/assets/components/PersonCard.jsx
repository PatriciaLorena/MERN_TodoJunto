import React, { useState } from 'react';

const PersonCard = (props) => {
  const [age, setAge] = useState(Number(props.age));

  const handleClick = () => {
    setAge(age + 1);
  };

  return (
    <div className="container" >
      <div>
        <h2>{props.firstName} {props.lastName}</h2>
        <p>Age: {age}</p>
        <p>Hair color: {props.hairColor}</p>
      </div>
      <button onClick={handleClick}>{props.boton}</button>
    </div>
  )
}

export default PersonCard;