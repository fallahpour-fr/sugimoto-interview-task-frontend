import "../styles/Card.css";

export const Card=(props)=>{
    return <div className="card_container">
        {props.children}
    </div>
}