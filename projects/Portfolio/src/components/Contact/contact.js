import React from 'react'
import './contact.css';

function Contact() {
  return (
    <section id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work with me.</span>
        <form className="contractForm">
            <input type="text" className="name" placeholder='Your Name'/>
            <input type="text" className="email" placeholder='Your Email'/>
            <textarea className='msg' name="message" row="5" placeholder='Your Message'></textarea>
            <button type='submit' value='send' className="submitBtn">Submit</button>
        </form>

    </section>
  );
}

export default Contact;