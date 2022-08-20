import './Traditional.css'
import tr1 from './../../../images/Traditional/tra1.png'
import tr2 from './../../../images/Traditional/tra2.png'
import tr3 from './../../../images/Traditional/tra3.png'
import tr4 from './../../../images/Traditional/tradi.png'



const data =[
  {
    id: 1,
    image: tr1,
    title: 'Simple Calculator',

  },
  {
    id: 2,
    image: tr2,
    title: 'Challenge From Frontend Mentor ',
  },
  {
    id: 3,
    image: tr3,
  },
  {
    id: 4,
    image: tr4,
  },

  
  

  ]
  



function Traditional() {
  return (
        <div className='traditional-conatiner'>

{


data.map(({id, image, title, github ,demo})=>{
return(
 
  <div key={id}className="traditional-card">

  <img src={image} alt="" />
</div>



)

})
} 
</div>
  )

}

 
  


export default Traditional