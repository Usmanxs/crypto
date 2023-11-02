    import React from 'react';
    import {FaFacebook,FaGithub,FaLinkedin,FaGlobe} from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
  
  
      <div className="social-icons" >
    
        <a href="https://usmanxs.com" target="_blank" rel="noopener noreferrer">
       <FaGlobe className='icon'/>
         
        </a>
        <a href="https://github.com/Usmanxs"  target="_blank" rel="noopener noreferrer">
       <FaGithub className='icon '/>
        </a>
        
        <a href="https://www.facebook.com/profile.php?id=100093033004151" target="_blank" rel="noopener noreferrer">
       <FaFacebook className='icon'/>
        </a>

        <a href="https://www.linkedin.com/in/m-usman-2b557b176/" target="_blank" rel="noopener noreferrer">
       <FaLinkedin className='icon'/>
      
        </a>
      </div>
    </footer>
  );
};

export default Footer;
