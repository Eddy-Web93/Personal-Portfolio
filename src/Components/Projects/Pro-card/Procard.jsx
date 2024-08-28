import React from 'react'
import './Procard.css'

const Procard = ({img ,type, name, link}) => {
  return (
    <div className='procard' style={{
        backgroundImage : `url(${img})`,
    }}>
        <div className='pro-name'>
            <h1>{name}</h1>
        </div>
        <div className="link">
            <a href={link}>link</a>
        </div>
        <div className='type'>
            <h1>{type === 1 ? "clone": "Own"}</h1>
        </div>
    </div>
  )
}

export default Procard