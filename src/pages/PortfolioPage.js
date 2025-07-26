import React from 'react';
import '../styles/PortfolioPage.css';
import { projectDetails } from '../configuaration/data';

const PortfolioPage = () => {
  return (
    <section className='blog-page'>
      <header className='blog-header'>
        <h1 className='blog-title'>Projects</h1>
        <p className='blog-subtitle'>
          List of projects I've worked on and contributed to
        </p>
      </header>

      <div className='blog-container'>
        {projectDetails.map((post, index) => {
          return (
            <article key={post.id} className='blog-card'>
              <div className={`blog-banner ${post.bannerColorClass}`}>
                <span className='blog-category'>{post.category}</span>
              </div>

              <div className='blog-content'>
                <div className='blog-meta'>
                  <time className='blog-date'>{post.date}</time>
                </div>

                <h3 className='blog-card-title'>{post.title}</h3>
                <p className='blog-description'>{post.description}</p>

                <button className='blog-read-more'>Read More</button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioPage;