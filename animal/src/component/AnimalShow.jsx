import { useState } from 'react'
import './Animal.css'
import cow from '../images/svg/cow.svg'
import dog from '../images/svg/dog.svg'
import horse from '../images/svg/horse.svg'
import bird from '../images/svg/bird.svg'
import gator from '../images/svg/gator.svg'
import cat from '../images/svg/cat.svg'
import heart from '../images/svg/heart.svg'
const svgMap = {
    bird,
    cat,
    dog,
    gator,
    horse,
    cow,
}
function AnimalShow ({type}){
    const [clicks , setClicks] = useState(0);

    const handleClick =()=>{
        setClicks(clicks + 1);
    }
    return(
        <div className="card" onClick={handleClick}>
           {type}
           <img src={svgMap[type]} alt="" />
           <img 
            src={heart} 
            alt="heart"
            style={{width: 10 + 10 * clicks}} />
        </div>
    )
}

export default AnimalShow