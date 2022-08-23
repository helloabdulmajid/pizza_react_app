import React from 'react'
import'../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
  return (
   <>
   <div className='footer'>
    <div className='socialMedia'>
    <InstagramIcon />
    <TwitterIcon/>
    </div>
    <p>&copy; 2022 - ampizzahunt.com</p>
   </div>
   </>
  )
}

export default Footer