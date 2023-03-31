const Link = ({link, text, alt, blank = false}) =>{
    return(
        <a className="link" href={link} alt={alt} target={ blank ? "_blank" : ""} rel={"noopenner"}> {text} </a>
    )
}

const LinkImg = ({className, link, img, alt, blank = false}) =>{
    return(
        <a className={className} href={link} alt={alt} target={ blank ? "_blank" : ""} rel={"noopenner"} > <img src={img}/> </a>
    )
}

export{
    Link,
    LinkImg
}