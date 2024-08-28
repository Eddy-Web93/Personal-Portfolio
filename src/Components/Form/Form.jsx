import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import './Form.css';

function Form() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [result, setResult] = useState("");

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    const serviceId = 'service_087cowb';
    const templateId = 'template_uzv29ap';
    const userId = 'eM__3zwSLlZ1O-FZM';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setResult('Message sent successfully!');
        clearForm();
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setResult('Failed to send message. Something is probably wrong');
        clearForm();
      });
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
    setCaptchaValue(null);  // Optionally reset the captcha as well
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 className="form-title e-head" aria-readonly>How Can I Help You</h1>
      <div className="form-all">
        <div className="form-details">
          <div className="form-name">
            <input type="text" placeholder='Full Name' required name="name" id="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-email">
            <input type="email" placeholder='Email Address' required name="email" id="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-number">
            <input type="tel" placeholder='Phone Number' name="phoneNumber" id="phone-number" required value={formData.phoneNumber} onChange={handleChange} />
          </div>
        </div>
        <div className="form-msg">
          <textarea placeholder='Message' required name="message" id="msg" cols="30" rows="10" value={formData.message} onChange={handleChange}></textarea>
        </div>
      </div>
      <div className="form-captcha">
        <ReCAPTCHA
          sitekey="6LdiFDEqAAAAAEnDxLa2tOQ3e9nDoSGnyX-eG2Q8"
          onChange={handleCaptchaChange}
        />
      </div>
      <div className="form-btns">
        <button className="btn download" type="submit">Send Message</button>
      </div>
      <div className='alert'>
        <p>{result}</p>
      </div>
    </form>
  );
}

export default Form;