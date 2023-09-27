import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id='education'>
      <h2>Education</h2>
      <div className="education-item">
        <h3>Bachelor of Information Technology (BIT) - Honors</h3>
        <p>Institution: Padmashree College</p>
        <p>Location: [Tinkune,Kathmandu- Nepal]</p>
      </div>

      <div className="education-item">
        <h3>Higher Secondary Education (10+2) - Science</h3>
        <p>Institution: Banepa NIST</p>
        <p>Location: [Banepa,Kavrepalanchok-Nepal]</p>
      </div>

      <div className="education-item">
        <h3>School Leaving Certificate (SLC)</h3>
        <p>Institution: Bal Niketan English Higher Secondary School</p>
        <p>Location: [Banepa,Kavrepalanchok-Nepal]</p>
      </div>
    </section>
  );
}

export default Education;
