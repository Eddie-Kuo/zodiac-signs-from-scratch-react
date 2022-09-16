import React from 'react';
import './Main.css';

import Zodiac from '../ZodiacCards/Zodiac.js';
import zodiac from '../../data';
import horoscope from '../../../src/horoscope.jpg';
// will need to import a background image as well to set inline 

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${horoscope})` }}>
      {zodiac.map((zodiac) => (
        <Zodiac key={zodiac.id} dataOfOneZodiac={zodiac} />
      ))}
    </main>
  );
}
