import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser'; 
import FacebookIcon from '../../assets/facebook-icon.png';
import TwiterIcon from '../../assets/twitter.png';
import YouteubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9o1xh47', 'template_w79crba', form.current, 'zttHXl5rSwlcH0CjZDsQ2')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill out the form below to discuss any work with me.</span>
      <form className="contractForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="your_name" />
        <input type="text" className="email" placeholder="Your Email" name="your_email" />
        <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
        <button type="submit" value="send" className="submitBtn">
          Submit
        </button>
        <div className="links">
          <a href="https://www.facebook.com/dayaram.thapa.18/" target="_blank" rel="noopener noreferrer" className="link">
            <img src={FacebookIcon} alt="Facebook" className="link" />
          </a>
          <a href="https://twitter.com/Dayaram1030" target="_blank" rel="noopener noreferrer" className="link">
            <img src={TwiterIcon} alt="Twitter" className="link" />
          </a>
          <a href="https://www.youtube.com/channel/UCc0Go3Sp9awQt5cGnlYnsXA" target="_blank" rel="noopener noreferrer" className="link">
            <img src={YouteubeIcon} alt="YouTube" className="link" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="link">
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
}

export default Contact;