import React from 'react'
import './Ecard.css'

const Ecard = ({date, where, jobTitle}) => {
  return (
    <div className='e-card'>
        <div className="up-date">
            <h3 className='date'>{date}</h3>
            <p>{where}</p>
        </div>
        <div className="card">
            <h1>{jobTitle}</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam corrupti dolores sapiente tenetur, obcaecati commodi quasi!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit corrupti id perspiciatis nam nulla cupiditate modi.
            </p>
        </div>
    </div>
  )
}

export default Ecard