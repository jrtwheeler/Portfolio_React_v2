import React from "react";
import "./style.css";

const Experience_Card = (props) => {
    return (
        <div>
        <h4 className="exprience_card_title">{props.title}</h4>
        <p className="exprience_card_body">{props.body}</p>
        </div>
    )
}

export default Experience_Card