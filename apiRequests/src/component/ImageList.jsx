import ImageShow from './ImageShow'
function ImageList({images}) {
    const rendredImages = images.map((image )=>{
        return <ImageShow  key={image.id} image={image}/>
    })
    return(
        <div>
            Images: {images.length}
            {rendredImages}
        </div>
    )
}

export default ImageList