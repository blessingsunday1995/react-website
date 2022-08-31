import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>H-Code CLOTHINGS</a>

     <ul className='permalink'>
<li><a href="#">Home</a></li>
<li><a href="#about">About</a></li>
        <li><a href="#service">Service</a></li>
        <li>  <a href="#gallery">Gallery</a></li>
<li><a href="#contact">Contact</a></li>




     </ul>


     <div className='footer_socials'>
      <a href='https://web.facebook.com/blessing.o.sunday'><FaFacebookF/></a>
      <a href='https://www.linkedin.com/in/blessing-mgbonyebi-80551b160'  target='_blank'><BsLinkedin/></a>
      <a href='https://twitter.com/BlessingMsunday'  target='_blank'><BsTwitter/></a>

      </div>

<div className='footer_copyright'>
        <small>&copy; H-Code CLOTHINGS. All rigth reserved</small>
</div>
      </footer>
  )
}

export default Footer