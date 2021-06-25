import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}
                <FontAwesomeIcon className="icon" icon={props.icon} style={{ color: "" }} />
                </h5>
                <hr></hr>
                <p className="card-text">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.languageOne}</li>
                    <li className="list-group-item">{props.languageTwo}</li>
                    <li className="list-group-item">{props.languageThree}</li>
                </ul>
                </p>
            </div>
        </div>
    )
}

export default Card