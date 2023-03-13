function ProfileCard ({title, handle, image}){
    // 1
    // const title = props.title;
    // const handle = props.handle

    // 2
    // const {title , handle } = props;
    console.log(title, handle, image)
    return(
        <div>
            {title }
            {handle}
            <img src={image} alt={image} />
        </div>
    )
}

export default ProfileCard