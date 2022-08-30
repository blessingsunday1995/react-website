import React from 'react';
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import  {useRef} from 'react';
import emailjs from 'emailjs-com'
import './contact.css'


const Contect = () => {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mxsmo6f', 'template_ks69lw9', form.current, 'HTmzEZq4wdp-BkGIs')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };




  return (
    <section id='contact'>
      <div className="contact-heading">
        <h1>Contact Me</h1>
        <h5>Get in Touch</h5>

      </div>
     
<div className='conatiner contact_conatiner' >
<div className='contact_options'>

<article className="contact_option"> 
<AiOutlineMail className='contact_option-icon'/> 
<h4>Email</h4>
<h5>blessing.sunday38@yahoo.com</h5>
<a href="mailto:blessing.sunday38@yahoo.com" target="_blank">Send a message</a>
</article>

<article className="contact_option"> 
<BsMessenger className='contact_option-icon'/>
<h4>Messenger</h4>
<h5>Blessing</h5>
<a href="https://m.me/blessing.o.sunday" target="_blank">Send a message</a>
</article>

<article className="contact_option"> 
<BsWhatsapp className='contact_option-icon'/>
<h4>WhatsApp</h4>
<h5>+2348131971666</h5>
<a href="https://wa.me/message/XTHEECKH6DS4F1" target="_blank">Send a message</a>
</article>

</div>
<form ref={form} onSubmit={sendEmail}>
<input type="text" name='name' placeholder='Your Full Name' required/>
<input type="email" name='email' placeholder='Your Email' required/>
<textarea name='message' rows="7" placeholder='Your Message' required></textarea>
<button type='submit' className='btn contact-btn'>Send Message</button>
 

</form>
</div>
      
      </section>
  )
}

export default Contect