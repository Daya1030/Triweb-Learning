import React, { useRef } from 'react'
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwiterIcon from '../../assets/twitter.png';
import YouteubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9o1xh47', 'template_w79crba', form.current, 'zttHXl5rSwlcH0CjZDsQ2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contactPage">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work with me.</span>
        <form className="contractForm" ref={form} onsubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name'/>
            <input type="text" className="email" placeholder='Your Email' name='your_email'/>
            <textarea className='msg' name="message" row="5" placeholder='Your Message'></textarea>
            <button type='submit' value='send' className="submitBtn">Submit</button>
            <div className="links">
                <img src={FacebookIcon} alt="" className="link" />
                <img src={TwiterIcon} alt="" className="link" />
                <img src={YouteubeIcon} alt="" className="link" />
                <img src={InstagramIcon} alt="" className="link" />
            </div>
        </form>

    </section>
  );
}

export default Contact;