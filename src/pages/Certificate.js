import React from 'react';
import '../styles/Certificate.css';
import { certificateData } from '../configuaration/data';

const Certificate = () => {
  return (
    <section className='certificate-page'>
      <header className='certificate-header'>
        <h1 className='certificate-title'>Certificates & Achievements</h1>
        <p className='certificate-subtitle'>
          Professional certifications and course completions that showcase my continuous learning journey
        </p>
      </header>

      <div className='certificate-container'>
        {certificateData.map((certificate) => (
          <article key={certificate.id} className='certificate-card'>
            <div className={`certificate-banner ${certificate.bannerColorClass || 'midnight-black'}`}>
              <span className='certificate-category'>{certificate.category}</span>
            </div>

            <div className='certificate-content'>
              <div className='certificate-meta'>
                <time className='certificate-date'>{certificate.issueDate}</time>
                {certificate.expiryDate && (
                  <span className='certificate-expiry'>Expires: {certificate.expiryDate}</span>
                )}
              </div>

              <h3 className='certificate-title-card'>{certificate.title}</h3>
              <h4 className='certificate-issuer'>{certificate.issuer}</h4>
              <p className='certificate-description'>{certificate.description}</p>

              {certificate.skills && certificate.skills.length > 0 && (
                <div className='certificate-skills'>
                  <h5>Skills Gained:</h5>
                  <div className='skill-tags'>
                    {certificate.skills.map((skill, index) => (
                      <span key={index} className='skill-tag'>{skill}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className='certificate-actions'>
                {certificate.credentialUrl && (
                  <a 
                    href={certificate.credentialUrl} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='certificate-link'
                  >
                    View Certificate
                  </a>
                )}
                {certificate.verificationCode && (
                  <span className='verification-code'>
                    ID: {certificate.verificationCode}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificate;