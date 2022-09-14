import React from 'react';
import './Zodiac.css';

//this function will be exported to main in order to display each individual card

export default function Zodiac({ zodiac }) {
  return (
    <div className='zodiac'>
      <img src={`${process.env.PUBLIC_URL}/Zodiac/${zodiac.name}.png`}/>
      <span>{zodiac.name}</span>
      <span>{zodiac.dates}</span>
      <span>{zodiac.symbol}</span>
    </div>
  );
}

