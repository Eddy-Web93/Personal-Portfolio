import React from 'react'
import mail from '../../assets/mail.png'
import location from '../../assets/Location.png'
import phone from '../../assets/appdev.png'
import './Details.css'

const Details = () => {
  return (
    <div className='details'>
        <div className='details-containers'>
            <div className="left-side">
                <img src={phone} alt="" />
            </div>
            <div className="right-side">
                <h1><a href="tel:+254739393508">+254739393508</a></h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe enim voluptate delectus.
                </p>
            </div>
        </div>
        <div className='details-containers'>
            <div className="left-side">
                <img src={mail} alt="" />
            </div>
            <div className="right-side">
                <h1><a href="mailto:muchiri.mwangi.100@gmail.com">muchiri.mwangi.100@gmail.com</a></h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe enim voluptate delectus.
                </p>
            </div>
        </div>
        <div className='details-containers'>
            <div className="left-side">
                <img src={location} alt="" />
            </div>
            <div className="right-side">
                <h1>Kenya, Nairobi, Nyeri, Nakuru</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe enim voluptate delectus.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Details