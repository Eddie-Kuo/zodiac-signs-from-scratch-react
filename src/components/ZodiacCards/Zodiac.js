import React from 'react';
import './Zodiac.css';

//import zodiac.css here as well 
//this function will be exported to main in order to display each individual card

export default function Zodiac({ name, dates, symbol }) {
  return (
    <div className='zodiac'>
      <image src={`${process.env.PUBLIC_URL}/Zodiac/${name}.svg`}/>
      <span>${name}</span>
      <span>${dates}</span>
      <span>${symbol}</span>
    </div>
  );
}

