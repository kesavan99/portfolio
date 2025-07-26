import React, { useState, useEffect } from 'react';
import { navbarData, subtitleForName } from '../configuaration/data';
import '../styles/Index.css';

const IndexPage = () => {
  const title = navbarData.title || "";
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitleForName.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='main-layout'>
      <div className='subtitle'>
        <div className="main-name">
          {title.split('').map((char, index) => (
            <span
              key={index}
              className="letter"
              style={{ animationDelay: `${0.5 + (index * 2) * (1 / title.length)}s` }}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="subtitle-text fade-in">
          {subtitleForName[currentSubtitleIndex]}
        </div>
      </div>

      <div className='dashboard'>
        <div className='first-row'>
          <div className='about-me'>
            <img src={require('../image/about.png')} alt="About Me" />
          </div>
          <div className='project'>
            <img src={require('../image/project.png')} alt="Project" />
          </div>
        </div>

        <div className='second-row'>
          <div className='about-me'>
            <img src={require('../image/certificate.png')} alt="Certificate" />
          </div>
          <div className='extras'>
            <img src={require('../image/extras.png')} alt="Extras" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
