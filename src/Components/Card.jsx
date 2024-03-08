import React from 'react';
import "./Card.css";
const Card = (props) => {
  return (
  <>
  <div className='card'>
  <h1>{props.title}</h1>
  <h1>{props.description}</h1>
  </div>
  </>
  );
};
