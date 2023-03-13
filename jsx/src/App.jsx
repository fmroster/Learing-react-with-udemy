import ProfileCard from "./component/Profilecard"
import 'bulma/css/bulma.css'
import Alexa from './images/alexa.png'
import cortana from './images/cortana.png'
import siri from './images/siri.png'
function App() {
  return (
    <div className="">
        <div className="App-header">Personal digital assistance</div>
        <ProfileCard  title ="Alexa" handle="@alexa" image={Alexa} />
        <ProfileCard title ="cortana" handle="@coratana" image ={cortana}/>
        <ProfileCard title ="Siri" handle="@siri01" image={siri}/>

    </div>
    )
}

export default App