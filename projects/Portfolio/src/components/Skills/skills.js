import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import Youtube from '../../assets/youtube.png';

const Skills=() => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with 
        little experience and knowledge on Mern stack, I am also intrested on gaming and i used 
        to do live on youtube playing different games like Valorant, Gta5 RP, PubG Pc and many more</span>
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
            <div className="skillBar">
                <img src={Youtube} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>PC Gamer</h2>
                    <p>My PC Specs:
                       Monitor: MSI Curve Gaming Monitor 27inch 165 Hz <br></br>
                       GPU: RTX 2060 Super 8GB<br></br>
                       CPU: Ryzen 7 3700x<br></br>
                       Ram: HyperX RGB 16GB 3600 MHz<br></br>
                       Cooler: Cooler Master Hyper H410R<br></br>
                       Motherboard: MSI AMD B450 Pro Max<br></br>
                       Mouse: MSI GM11<br></br>
                       Keyboard: ViewSonic KU580</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;