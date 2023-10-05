import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';

const Works = () => {
  const portfolioItems = [
    { image: Portfolio1, link: 'https://github.com/Daya1030/Chicken-Disease-prediction-System', description: 'Project 1 Chicken disease prediction System' }, 
    { image: Portfolio2, link: 'https://github.com/Daya1030/Triweb-Learning/tree/main/projects/QuizManager', description: 'Project 2 Quiz app' }, 
    { image: Portfolio3, link: 'https://github.com/Daya1030/Triweb-Learning/tree/main/projects/tic-tac-toe-react', description: 'Project 3 Tic-Tac-Toe' }, 
  ];

  const handleViewButtonClick = (link) => {
    window.open(link, '_blank'); 
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">I am a full-stack developer, and here are the links to my GitHub repositories:</span>
      <div className="worksImgs">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolioItem">
            <div className="image-container">
              <img src={item.image} alt={`Portfolio ${index + 1}`} className="workImg" />
              <div className="image-overlay">
                <p>{item.description}</p>
                <button onClick={() => handleViewButtonClick(item.link)} className="view-button">View Project</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
