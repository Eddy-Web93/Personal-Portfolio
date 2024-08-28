import React from 'react'
import './Lines.css'

const Lines = ({skill, width}) => {
  return (
    <div className='lines'>
        <div className='skill'>
            <h1>{skill}</h1>
        </div>
        <div className="line">
            <div className='span' style={{width : `${width}%`}}>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Lines