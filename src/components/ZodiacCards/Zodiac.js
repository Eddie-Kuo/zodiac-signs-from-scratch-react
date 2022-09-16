import React from 'react';
import './Zodiac.css';

//this function will be exported to main in order to display each individual card

export default function Zodiac({ dataOfOneZodiac }) {
  return (
    <div className='zodiac'>
      <img src={`${process.env.PUBLIC_URL}/Zodiac/${dataOfOneZodiac.name}.png`}/>
      <span>{dataOfOneZodiac.name}</span>
      <span>{dataOfOneZodiac.dates}</span>
      <span>{dataOfOneZodiac.symbol}</span>
    </div>
  );
}

//testing netlify