import React from 'react'
import myImg from '../../assets/Another-one.jpg'
import pdf from '../../assets/this.pdf'
import './Hero.css'

const Hero = ({setActive}) => {
  return (
    <div className='hero'>
        {/* Left side */}
        <div className='left'>
            <span className="section">
                <img src={myImg} className='hero-img' alt="" />
            </span>
        </div>
        {/* Right side */}
        <div className='right'>
            <div className="sheet">
                <ul className='title'>
                    <li>FullStack Developer</li>
                    <li>Website Developer</li>
                    <li>Website Designer</li>
                    <li>Data Science</li>
                    <li>Machine Engineer</li>
                </ul>
            </div>
            <h1>Muchiri Mwangi</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam provident beatae exercitationem quos, ipsam commodi, aperiam dolorem dolor sapiente quis doloremque explicabo voluptates rerum unde delectus impedit pariatur! Pariatur, et!
            </p>
            <div className='btns'>
                <button className='btn download'><a href={pdf} download >Download Cv</a></button>
                <button className="contact-direct btn"><a href="tel:+254739393508">Contact</a></button>
            </div>
        </div>
    </div>
  )
}

export default Hero