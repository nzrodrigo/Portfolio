import React from 'react'
import '../styles/Contact.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <div className="contact">
      <h2>
        CONTACT ME
      </h2>
      <form className="form-container" name='contact' method='POST' data-netlify="true" onSubmit="submit">   
        <div className="left">  
          <input name="name" type="text" className="feedback-input" placeholder="Name" />   
          <input name="email" type="text" className="feedback-input" placeholder="Email" />
          <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
          <input type="submit" value="SEND"/>
        </div>
        <div className="right">
              <div className="direction-item">
                  <EmailIcon />
                  <a href = "mailto:rodrigo3nz@gmail.com">rodrigo3nz@gmail.com</a>
              </div>
              <div className="direction-item">
                  <PhoneIcon />
                  <a href="tel:+54 9 1169131571">+54 9 11-6913-1571</a>
              </div>
              <div className="direction-item">
                  <GitHubIcon />
                  <a href="https://github.com/nzrodrigo" target="_blank" rel="noopener noreferrer">github.com/nzrodrigo</a>
              </div>
              <div className="direction-item">
                  <LinkedInIcon />
                  <a href="https://www.linkedin.com/in/nzrodrigo/" target="_blank" rel="noopener noreferrer">linkedin.com/in/nzrodrigo</a>
              </div>
        </div>
      </form>
    </div>
  )
}

export default Contact