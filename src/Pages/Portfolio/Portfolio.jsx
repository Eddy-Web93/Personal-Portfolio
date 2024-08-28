import React from 'react'
import './Portfolio.css'
import Title from '../../Components/Title/Title'
import Projects from '../../Components/Projects/Projects'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Title head='Portfolio' short={'My masterpieces (incredible work)'}/>
      <div className="portfolio-container">
        <Projects/>
      </div>
    </div>
  )
}

export default Portfolio