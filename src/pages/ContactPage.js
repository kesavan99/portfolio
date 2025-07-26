import React, { useEffect } from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  // Load Pageclip script and CSS
  useEffect(() => {
    // Load Pageclip script
    const script = document.createElement('script');
    script.src = 'https://s.pageclip.co/v1/pageclip.js';
    script.charset = 'utf-8';
    document.head.appendChild(script);

    // Load Pageclip CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://s.pageclip.co/v1/pageclip.css';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <section className='contact-page'>
      <header className='contact-header'>
        <h1 className='contact-title'>Get In Touch</h1>
        <p className='contact-subtitle'>
          Have a project in mind? Let's discuss your ideas and bring them to life.
        </p>
      </header>

      <div className='contact-container'>
        <form 
          className='contact-form pageclip-form'
          action="https://send.pageclip.co/wTFcmFXTdti564g5zDxzYEbsVemq4Hn6"
          method="post"
        >
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='name'>Full Name</label>
              <input
                type='text'
                id='name'
                name='name'
                required
                placeholder='Enter your full name'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                id='email'
                name='email'
                required
                placeholder='Enter your email address'
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='subject'>Subject</label>
            <input
              type='text'
              id='subject'
              name='subject'
              required
              placeholder='What is this about?'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              required
              rows='6'
              placeholder='Tell me about your project or inquiry...'
            />
          </div>

          <button type='submit' className='submit-button pageclip-form__submit'>
            <span>Send Message</span>
          </button>
        </form>

        {/* Contact Info Section remains the same */}
        <div className='contact-info'>
          <div className='info-card'>
            <h3>Contact Information</h3>
            <div className='info-item'>
              <span className='info-icon'>📧</span>
              <div className='info-content'>
                <span className='info-label'>Email</span>
                <span className='info-value'>kesavan@example.com</span>
              </div>
            </div>
            <div className='info-item'>
              <span className='info-icon'>📱</span>
              <div className='info-content'>
                <span className='info-label'>Phone</span>
                <span className='info-value'>+91 98765 43210</span>
              </div>
            </div>
            <div className='info-item'>
              <span className='info-icon'>📍</span>
              <div className='info-content'>
                <span className='info-label'>Location</span>
                <span className='info-value'>Chennai, India</span>
              </div>
            </div>
          </div>

          <div className='info-card'>
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new projects and opportunities. Whether you're a company looking to hire, or you're someone who has a project in mind, I'd love to hear from you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;