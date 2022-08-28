import React from 'react'
import AboutImg from '../../images/hcode-about.png'
import './Aboutpage.css'

function AboutPage() {
  return (
    <section id='about'>
   
    
      <div className='conatiner about-conatiner '>
  <div className='about-heading'>
<h1>About Us</h1>    
    <h5>Architecto nobis eos vel nam quidem vitae
      temporibus voluptates qui hic deserunt iusto omnis nam
       voluptas asperiores sequi tenetur dolores incidunt 
      enim voluptatem magnam cumque fuga.</h5>
      </div>
        <div className='about-contect-conatiner'>
<div className='about-image'>
<img src={AboutImg} alt="" />

</div>

<div className='about-text'>

<p>Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero
Saepe fuga
Voluptates
Corrupti
Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.

Repudiandae rerum velit modi et officia quasi facilis
Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.

Incidunt non veritatis illum ea ut nisi
Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.

Omnis ab quia nemo dignissimos rem eum quos..
Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse.
 Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p>

 <a href='#contact' className='btn about-btn'>Contact Us</a>
</div>

</div>
 
</div>

    </section>
  )
}

export default AboutPage