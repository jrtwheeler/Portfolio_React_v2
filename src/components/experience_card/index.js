import React from "react";
import "./style.css";

const Experience_Card = (props) => {
    return (
        <div>
        <h5 className="exprience_card_title">{props.title}</h5>
        <p className="exprience_card_body">{props.body}</p>
        </div>
    )
}

export default Experience_Card