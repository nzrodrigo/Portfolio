import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'
import { IconButton } from '@mui/material';

function Footer() {
  return (
    <div className="footer">
      <IconButton sx={{"&:hover": {backgroundColor: "transparent", }}} href='https://www.linkedin.com/in/nzrodrigo/' target='_blank'>
        <LinkedInIcon />
      </IconButton>
      <IconButton sx={{"&:hover": {backgroundColor: "transparent", }}} href='https://github.com/nzrodrigo' target='_blank'>
        <GitHubIcon />   
      </IconButton>   
    </div>
  )
}

export default Footer