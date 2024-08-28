import React from 'react'
import './Resume.css'
import Title from '../../Components/Title/Title'
import EdEx from '../../Components/EdEx/EdEx'
import DeCo from '../../Components/DeCo/DeCo'

const About = () => {
  return (
    <div className='resume'>
      <Title head='Resume' short='An Year of Experience' />
      <div className='resume-container'>
        <EdEx/>
        <DeCo/>
      </div>
    </div>
  )
}

export default About