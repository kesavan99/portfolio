import React from 'react';
import '../styles/About.css';
import { educationData } from '../configuaration/data';

const About = () => {
  return (
    <section className='about-page'>
      <header className='about-header'>
        <h1 className='about-title'>About Me</h1>
        <p className='about-subtitle'>
          My journey through education and professional development
        </p>
      </header>

      <div className='about-container'>
        {/* Personal Introduction */}
        <div className='intro-section'>
          <div className='intro-content'>
            <h2>Hello, I'm Kesavan</h2>
            <p>
              I'm a passionate web developer with expertise in modern web technologies. 
              My journey in technology started with curiosity and has evolved into a 
              career focused on creating innovative digital solutions.
            </p>
            <p>
              I specialize in full-stack development, with particular strength in 
              React.js, Node.js, and modern web frameworks. I believe in writing 
              clean, maintainable code and creating user experiences that make a difference.
            </p>
          </div>
        </div>

        {/* Education Timeline */}
        <div className='timeline-section'>
          <h2 className='section-title'>Education Timeline</h2>
          
          <div className='timeline'>
            {educationData.map((item, index) => (
              <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className='timeline-content'>
                  <div className='timeline-marker'>
                    <div className='timeline-icon'>
                      <span className='timeline-number'>{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className='timeline-card'>
                    <div className='timeline-date'>{item.period}</div>
                    <h3 className='timeline-title'>{item.degree}</h3>
                    <h4 className='timeline-institution'>{item.institution}</h4>
                    <p className='timeline-description'>{item.description}</p>
                    
                    {item.achievements && item.achievements.length > 0 && (
                      <div className='timeline-achievements'>
                        <h5>Key Achievements:</h5>
                        <ul>
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.grade && (
                      <div className='timeline-grade'>
                        <span className='grade-label'>Grade: </span>
                        <span className='grade-value'>{item.grade}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className='skills-section'>
          <h2 className='section-title'>Technical Skills</h2>
          <div className='skills-grid'>
            <div className='skill-category'>
              <h3>Frontend</h3>
              <div className='skill-tags'>
                <span className='skill-tag'>React.js</span>
                <span className='skill-tag'>JavaScript</span>
                <span className='skill-tag'>HTML5</span>
                <span className='skill-tag'>CSS3</span>
                <span className='skill-tag'>TypeScript</span>
              </div>
            </div>
            
            <div className='skill-category'>
              <h3>Backend</h3>
              <div className='skill-tags'>
                <span className='skill-tag'>Node.js</span>
                <span className='skill-tag'>Express.js</span>
                <span className='skill-tag'>Python</span>
                <span className='skill-tag'>Flask</span>
                <span className='skill-tag'>MongoDB</span>
              </div>
            </div>
            
            <div className='skill-category'>
              <h3>Tools & Others</h3>
              <div className='skill-tags'>
                <span className='skill-tag'>Git</span>
                <span className='skill-tag'>Docker</span>
                <span className='skill-tag'>AWS</span>
                <span className='skill-tag'>React Native</span>
                <span className='skill-tag'>Machine Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;