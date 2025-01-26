import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/asset/theme_pattern.svg'
import mail_icon from '../../assets/asset/mail_icon.svg'
import call_icon from '../../assets/asset/call_icon.svg'
import location_icon from '../../assets/asset/location_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "34b22ba8-5b2d-4f4a-8c48-73808b741d92");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projecgts, so feel free to send a message about anything that you want me to work on.You can contact anytime</p>
                
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>mominjemal@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>09131941320</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>Addis Ababa, Ethiopia</p>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter yor name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter Your Email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name='message' rows="8"placeholder='Enter your message'/>
            <button type='submit' className='contact-submit'>Submit nuw</button>
            </form>
        </div>

    </div>
  )
}

export default Contact