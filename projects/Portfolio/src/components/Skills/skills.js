import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';

const Skills=() => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with little experience and knowledge on Mern stack</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is UI/UX Design section</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is Website Design section</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;