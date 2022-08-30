import React from 'react'
import AboutImg from '../../images/hcode-about.png'
import './Aboutpage.css'

function AboutPage() {
  return (
    <section id='about'>
   
    
      <div className='conatiner about-conatiner '>
  <div className='about-heading'>
<h1>About Us</h1>    
    
      </div>
        <div className='about-contect-conatiner'>
<div className='about-image'>
<img src={AboutImg} alt="" />

</div>

<div className='about-text'>

            <p>Here at H-CODE CLOTHINGS We are dedicated to Providing
               You with the best designs in vogue.Over the years of
                our Existence our accuracy, reliability and dedication 
                has Spoken for us.We know the best wears and design for 
                your next  occasion and we're readily available to 
                provide you your taste within a short period of time.
                 Why not try us today and see the difference, we can
                  bet this with you - You won't want to have any other 
                  Fashion Designer for yourself.</p>

 <a href='#contact' className='btn about-btn'>Contact Us</a>
</div>

</div>
 
</div>

    </section>
  )
}

export default AboutPage