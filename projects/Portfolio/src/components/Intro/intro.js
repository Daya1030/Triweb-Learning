import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

function intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">I'm<span className="introName">Daya</span> <br/>Full Stack Developer on Mernstack</span>
        <p className="introPara">I am a skilled full stack developer with experience in Mernstack.</p>
        <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg' />Hire Me</button></Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
}

export default intro;
