import './Service.css'
import Tra from '../../images/tradi.png'
import agaba from './../../images/agada.png'
import suit from './../../images/siut.png'
import shirt from './../../images/shirt.png'

function Service() {
  return (
    <section id='service'>
     <div className='conatiner'>

     <div className='service-heading'>
<h1>Our Services</h1>    
    <h5>Architecto nobis eos vel nam quidem vitae
      temporibus voluptates qui hic deserunt iusto omnis nam
       voluptas asperiores sequi tenetur dolores incidunt 
      enim voluptatem magnam cumque fuga.</h5>
      </div>

<div className='srvices-conatiner'>
<div className="card">
  <h3>Traditional Wear</h3>
  <img src={Tra} alt="" />
</div>

<div className="card">
  <h3>Agbada</h3>
  <img src={agaba} alt="" />
</div>

<div className="card">
  <h3>Suit</h3>
  <img src={suit} alt="" />
</div>
    

<div className="card">
  <h3>Shirt</h3>
  <img src={shirt} alt="" />
</div>
    
    
    </div>      

     </div>
        </section>
  )
}

export default Service