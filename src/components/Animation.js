import "../css/components/animation.css"
import "../css/responsive.css"

export default function Animation(props){
    return(
        <>
            <div className={`animation left ${props.className}`}></div>
            <div className={`animation right ${props.className}`}></div>
        </>
    )
}