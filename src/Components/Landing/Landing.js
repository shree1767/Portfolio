import React from 'react'
import Hero from './Hero/Hero';
import Info from './Info/Info';
import Works from './Works/Works';
import Contact from './Contact/Contact';

const Landing = () => {
  return (
    <div>
          <Hero/>
          <Info/>
          <Works/>
          <Contact/>
    </div>
  )
}

export default Landing