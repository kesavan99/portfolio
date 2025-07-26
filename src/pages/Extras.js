import React from 'react';
import '../styles/Extras.css';
import { extrasData } from '../configuaration/data';

const Extras = () => {
  return (
    <section className='extras-page'>
      <header className='extras-header'>
        <h1 className='extras-title'>Extra-Curricular Activities</h1>
        <p className='extras-subtitle'>
          Beyond academics - exploring interests, building skills, and making meaningful contributions
        </p>
      </header>

      <div className='extras-container'>
        {extrasData.map((activity) => (
          <article key={activity.id} className='extras-card'>
            <div className={`extras-banner ${activity.bannerColorClass || 'midnight-black'}`}>
              <span className='extras-category'>{activity.category}</span>
            </div>

            <div className='extras-content'>
              <div className='extras-meta'>
                <time className='extras-date'>{activity.period}</time>
                {activity.status && (
                  <span className={`extras-status ${activity.status.toLowerCase()}`}>
                    {activity.status}
                  </span>
                )}
              </div>

              <h3 className='extras-title-card'>{activity.title}</h3>
              <h4 className='extras-organization'>{activity.organization}</h4>
              <p className='extras-description'>{activity.description}</p>

              {activity.achievements && activity.achievements.length > 0 && (
                <div className='extras-achievements'>
                  <h5>Key Achievements:</h5>
                  <ul>
                    {activity.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activity.skills && activity.skills.length > 0 && (
                <div className='extras-skills'>
                  <h5>Skills Developed:</h5>
                  <div className='skill-tags'>
                    {activity.skills.map((skill, index) => (
                      <span key={index} className='skill-tag'>{skill}</span>
                    ))}
                  </div>
                </div>
              )}

              {activity.recognition && (
                <div className='extras-recognition'>
                  <div className='recognition-badge'>
                    <span className='recognition-icon'>🏆</span>
                    <span className='recognition-text'>{activity.recognition}</span>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Extras;