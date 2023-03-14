function ProfileCard ({title, handle, image, desc}){
    // 1
    // const title = props.title;
    // const handle = props.handle

    // 2
    // const {title , handle } = props;
    console.log(title, handle, image, desc)
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt={image} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">
                        {title}
                    </p>
                    <p className="subtitle is-6">
                        {handle}
                    </p>
                </div>
                <div className="content">
                    {desc}
                </div>
                
            </div>
            
        </div>
    )
}

export default ProfileCard