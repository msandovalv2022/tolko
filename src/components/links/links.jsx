const Link = (props) =>{
    return(
        <a href={props.link}>{props.text}</a>
    )
}

const LinkImg = (props) =>{
    return(
        <a href={props.link}><img src={props.img} alt="" /></a>
    )
}

export{
    Link,
    LinkImg
}