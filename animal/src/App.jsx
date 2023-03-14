import {useState} from "react"
import './App.css'
import AnimalShow from "./component/AnimalShow";
function getRandomAnimal(){
  const animals = ['bird', 'cat', 'cow', 'goats'];

  return animals[Math.floor(Math.random() *animals.length)]
}
console.log(getRandomAnimal())
function App() {
  const [animals, setAnimals]  = useState([]);
    const handdleClick = ()=>{
      setAnimals( [...animals, getRandomAnimal()])
    }

    const renderedAnimals  = animals.map((animal, index)=>{
      return <AnimalShow type={animal} key={index}/>
    })
   
  return (
    <div>
       {/* <AnimalShow title="animal show"/> */}
       <button onClick={handdleClick}>Add animal</button>
       <hr />
       <h4>{renderedAnimals}</h4>
    </div>
    )
}

export default App