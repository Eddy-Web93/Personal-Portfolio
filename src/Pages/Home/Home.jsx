import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import What from '../../Components/WhatICanDo/What'
import Testimonials from '../../Components/Testimonials/Testimonials'

const Home = ({setActive}) => {
  return (
    <div className='home'>
      <Hero setActive={setActive}/>
      <What/>
      <Testimonials/>
    </div>
  )
}

export default Home