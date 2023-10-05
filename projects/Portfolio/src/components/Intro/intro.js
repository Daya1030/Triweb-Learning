import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>;

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">I'm <span className="introName">DayaRam Thapa</span> <br/>Full Stack Developer on MERN stack</span>
        <p className="introPara">
          I'm passionate about building modern and scalable web applications using the MERN (MongoDB, Express, React, Node.js) stack.<br/> 
          With a strong foundation in HTML, CSS, JavaScript, and TypeScript, I create interactive and user-friendly frontends.
        </p>
        <p className="introPara">
          On the backend, I'm experienced in creating RESTful APIs using Node.js and Express,and I'm proficient with <br/> 
          both MongoDB and MySQL for database management. I'm also comfortable with version control using Git.
        </p>
        <p className="introPara">
          My dedication to clean code, attention to detail, and problem-solving skills allow me to deliver high-quality <br/> 
          software that meets user needs. Let's work together to bring your project to life!
        </p>
        <Link to='contactPage' smooth={true} duration={500}>
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
}

export default Intro;
