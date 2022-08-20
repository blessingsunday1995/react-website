import './Suit.css'


import siut1 from './../../../images/Suit/siut.png'
import siut2 from './../../../images/Suit/su4.jpeg'




const data =[
  {
    id: 1,
    image: siut1,
    title: 'Simple Calculator',

  },
  {
    id: 2,
    image: siut2,
    title: 'Challenge From Frontend Mentor ',
  },
 

  
  

  ]
  



function Suit() {
  return (
    <div className='suit-conatiner'>

{


data.map(({id, image, title, github ,demo})=>{
return(
 
  <div key={id}className="suit-card">

  <img src={image} alt="" />
</div>



)

})
} 
</div>
  )
}

export default Suit