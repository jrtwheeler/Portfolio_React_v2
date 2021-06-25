import React from "react";
import "./style.css";

const Experience_Card = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        </div>
    )
}

export default Experience_Card