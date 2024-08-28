import React from 'react'
import './TestCard.css'
import user from '../../../assets/user.png'
import qoute from '../../../assets/qoute.png'

const TestCard = () => {
  return (
    <div className='test-card'>
        <img src={user} className='test-img' alt="" />
        <div className='quo'>
             <img src={qoute} className='quo-img' alt="" />
        </div>
        <div className="text">
            <p>
                For anyone who will be my first cient I wish you goodluck may God give you wonders na blessings 
            </p>
            <div className="details">
                <h1 className="name">
                    Prospective Client
                </h1>
                <h3 className="occ">
                    Your Title
                </h3>
            </div>
        </div>
        <div className="quo-2">
            <p>"</p>
        </div>
    </div>
  )
}

export default TestCard