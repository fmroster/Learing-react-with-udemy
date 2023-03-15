import './Animal.css'

function ImageShow ({image}){
    // const [clicks , setClicks] = useState(0);

    // const handleClick =()=>{
    //     setClicks(clicks + 1);
    // }
    return(
        <div className="card" >
          
            <img src={image.urls.small} alt={image.description} />
            <p>{image.description}</p>
        </div>
    )
}

export default ImageShow