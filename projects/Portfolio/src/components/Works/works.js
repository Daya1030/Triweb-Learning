import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  const portfolioItems = [
    { image: Portfolio1, link: 'https://github.com/Daya1030/Triweb-Learning/tree/main/projects/QuizManager' }, 
    { image: Portfolio2, link: 'https://github.com/Daya1030/Triweb-Learning/tree/main/projects/QuizManager' }, 
    { image: Portfolio3, link: 'https://github.com/Daya1030/Triweb-Learning/tree/main/projects/QuizManager' }, 
    { image: Portfolio4, link: 'https://github.com/Daya1030/Triweb-Learning/tree/main/projects/QuizManager' }, 
    { image: Portfolio5, link: 'https://github.com/Daya1030/Triweb-Learning/tree/main/projects/QuizManager' }, 
    { image: Portfolio6, link: 'https://github.com/Daya1030/Triweb-Learning/tree/main/projects/QuizManager' },
  ];

  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">I am a full-stack developer and here are my some Works</span>
      <div className="worksImgs">
        {portfolioItems.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.image} alt={`Portfolio ${index + 1}`} className="workImg" />
          </a>
        ))}
      </div>
      
    </section>
  );
};

export default Works;
