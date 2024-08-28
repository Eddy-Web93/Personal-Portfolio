import React from 'react'
import './Footer.css'
import linkedin from '../../assets/LinkedIn.png'
import x from '../../assets/X.png'
import fb from '../../assets/Facebook.png'


const Footer = () => {
  return (
    <div className='footer-container'>
        <footer class="footer">
            <div class="footer-social">
                <ul class="footer-social-links">
                <li>
                    <a href="#" target="_blank"><img className='footer-icon' src={linkedin} alt="" /></a>
                </li>

                <li>
                    <a href="#" target="_blank"><img className='footer-icon' src={x} alt="" /></a>
                </li>

                <li>
                    <a href="#" target="_blank"><img className='footer-icon' src={fb} alt="" /></a>
                </li>
                </ul>
            </div>
                
            <div class="footer-copyrights">
                <p>&copy; 2024 All rights reserved. Muchiri Mwangi.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer