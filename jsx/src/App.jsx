import ProfileCard from "./component/Profilecard"
import 'bulma/css/bulma.css'
import Alexa from './images/alexa.png'
import cortana from './images/cortana.png'
import siri from './images/siri.png'
function App() {
  return (
    <div>
        <div className="hero is-primary">
            <div className="hero-body">
                <p className="title">
                    Personal digital assistance
                </p>
            </div>
        </div>
        <div className="container">
            <div className="section">
                <div className="columns">
                    
                <div className="column is-4">
                     <ProfileCard  
                        title ="Alexa" 
                        handle="@alexa" 
                        image={Alexa}
                        desc="hello these is aleaxa" 
                        />

                </div>
                <div className="column is-4">
                    <ProfileCard 
                        title ="cortana" 
                        handle="@coratana" 
                        image ={cortana}
                        desc="cortana by miscrosft"
                        />

                </div>
                <div className="column is-4">
                     <ProfileCard 
                        title ="Siri" 
                        handle="@siri01" 
                        image={siri}
                        desc="apple powered"
                        />

                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default App