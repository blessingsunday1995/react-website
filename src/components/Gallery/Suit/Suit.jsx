import './Suit.css'


import siut1 from './../../../images/Suit/siut.png'
import siut2 from './../../../images/Suit/su4.jpeg'

import {motion} from "framer-motion"


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
    <motion.div
     className='suit-conatiner'
     initial={{opacity: 0}}
     animate={{opacity: 1}}
     exit={{opacity: 0}}
     >

{


data.map(({id, image, title, github ,demo})=>{
return(
 
  <div key={id}className="suit-card">

  <img src={image} alt="" />
</div>



)

})
} 
</motion.div>
  )
}

export default Suit