import React from 'react'
import './Contact.css'
import Title from '../../Components/Title/Title'
import Form from '../../Components/Form/Form'
import Details from '../../Components/Details/Details'


const Contact = () => {
  return (
    <div className='contact'>
      <Title head='Contact' short="let's connect"/>
      <div className="contact-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127311.30876944555!2d36.94195636412134!3d-0.3827428196204424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d96885b625aff9%3A0x2ebcdd4c5f0083a9!2sDedan%20Kimathi%20University%20of%20Technology!5e0!3m2!1sen!2ske!4v1693571530371!5m2!1sen!2ske" 
          className='iframe-map'
          style={{border:0,}}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div className="contact-inside">
            <Details/>
            <Form/>
        </div>
      </div>
    </div>
  )
}

export default Contact