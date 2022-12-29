const Link = (props) =>{
    return(
        <a className="link" target={"_blank"} rel={"noopenner"} href={props.link}>{props.text}</a>
    )
}

const LinkImg = (props) =>{
    return(
        <a className={props.class} target={"_blank"} rel={"noopenner"} href={props.link}><img src={props.img} alt="" /></a>
    )
}

export{
    Link,
    LinkImg
}