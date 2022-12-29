const Link = (props) =>{
    return(
        <a target={"_blank"} rel={"noopenner"} href={props.link}>{props.text}</a>
    )
}

const LinkImg = (props) =>{
    return(
        <a target={"_blank"} rel={"noopenner"} href={props.link}><img src={props.img} alt="" /></a>
    )
}

export{
    Link,
    LinkImg
}