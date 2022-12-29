const ImgMouseMove = (props) =>{
    return(
        <img onMouseMove={props.function} className={props.class} src={props.img} alt={props.alt} />
    )
}

export{
    ImgMouseMove
}