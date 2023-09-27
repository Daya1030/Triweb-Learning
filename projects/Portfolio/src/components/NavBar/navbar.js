import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import ContactImg from '../../assets/contact.png';

const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
            <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} className="desktopMenuListItem">About Me</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-70} className="desktopMenuListItem">Education</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-70} className="desktopMenuListItem">Portfolio</Link>
            </div>
            <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} className="desktopMenuBtn"> 
            <button className="desktopMenuBtn"> <img src={ContactImg} alt="ContactImg" className="desktopMenuImg" />Contact Me</button></Link>    
        </nav>
    )
}

export default Navbar;