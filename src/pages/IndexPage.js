import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' // Add this import
import { navbarData, subtitleForName } from '../configuaration/data'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import '../styles/Index.css'

const IndexPage = () => {
  const title = navbarData.title || ''
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0)
  const navigate = useNavigate() // Add this hook

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitleIndex(
        prev => (prev + 1) % subtitleForName.length
      )
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleProjectClick = () => {
    navigate('/portfolio')
  }

const handleAboutClick = () => {
    navigate('/about')
  }

  const handleExtrasClick = () => {
    navigate('/extras')
  }

  const handleCertificateClick = () => {
    navigate('/certificate')
  }
  return (
    <div className='main-layout'>
      <div className='subtitle'>
        <div className='main-name'>
          {title.split('').map((char, i) => (
            <span
              key={i}
              className='letter'
              style={{
                animationDelay: `${0.5 + (i * 2) * (1 / title.length)}s`
              }}
            >
              {char}
            </span>
          ))}
        </div>
        <div className='subtitle-text fade-in'>
          {subtitleForName[currentSubtitleIndex]}
        </div>
      </div>

      <div className='dashboard'>
        {/* All images in a single container - no rows needed */}
        <div className='about-me dashboard-img' onClick={handleAboutClick}>
          <LazyLoadImage
            src={require('../image/about.png')}
            alt='About Me'
            effect='blur'
          />
        </div>
        
        <div className='project dashboard-img' onClick={handleProjectClick}>
          <LazyLoadImage
            src={require('../image/project.png')}
            alt='Project'
            effect='blur'
          />
        </div>
        
        <div className='about-me dashboard-img' onClick={handleCertificateClick}>
          <LazyLoadImage
            src={require('../image/certificate.png')}
            alt='Certificate'
            effect='blur'
          />
        </div>
        
        <div className='extras dashboard-img' onClick={handleExtrasClick}>
          <LazyLoadImage
            src={require('../image/extras.png')}
            alt='Extras'
            effect='blur'
          />
        </div>
      </div>
    </div>
  )
}

export default IndexPage