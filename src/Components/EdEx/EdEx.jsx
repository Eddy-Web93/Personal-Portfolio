import React from 'react'
import './EdEx.css'
import Ecard from './E-Card/Ecard'

const EdEx = () => {
  return (
    <div className='edex'>
        {/* Education */}
        <div className='ed'>
            <div className="e-head">
                <h1>Education</h1>
            </div>
            <div className="ed-box">
                <Ecard date='2022' where='Dedan Kimathi University Of Technology' jobTitle='Actuary-student' />
                <Ecard date="2019" where="Maai-Mahiu Boys' High School" jobTitle='High-School student'/>
            </div>
        </div>
        <div className="ex">
            <div className="e-head">
                <h1>Experience</h1>
            </div>
            <div className="ex-box">
                <Ecard date="2024" where="Adhome" jobTitle='Website Designer'/>
                <Ecard date="2024" where="Adhome" jobTitle='Website Designer'/>
            </div>
        </div>
    </div>
  )
}

export default EdEx