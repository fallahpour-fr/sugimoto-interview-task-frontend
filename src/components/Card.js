import "../styles/Card.css";

export const Card=(props)=>{
    return <div onClick={props.onClick} className="card_container">
        {props.children}
    </div>
}