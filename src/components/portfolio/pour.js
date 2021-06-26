import React from "react";
import ReactTooltip from "react-tooltip";
import "./style.css";
import Pour from "../../assets/pour_decision.jpg";
//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const openPopupboxPour = () => {
    const content = (
        <>
            <img className="portfolio-image-popupbox mb-2" src={Pour} alt="Pour Decision" />
            <h1>Pour Decision</h1>
            <hr></hr>
            <p className="popupbox-text">Pour Decision is quick and easy way to get a recipe for a meal and a drink. 
            Just choose the principal ingredient for the meal and drink from the dropdown menu and click the search button.</p>
            <hr></hr>
            <ReactTooltip
                id="gitHub"
                place="bottom"
                effect="solid"
                backgroundColor="#4A6479"
            >
                Open GitHub Repo
            </ReactTooltip>

            <ReactTooltip
                id="app"
                place="bottom"
                effect="solid"
                backgroundColor="#4A6479"
            >
                Open App
            </ReactTooltip>
            <b className="popupbox-text-icon" data-tip data-for="gitHub"><FontAwesomeIcon icon={faGithub} /></b>
            <a className="hyper-link" onClick={() => window.open("https://github.com/jrtwheeler/Pour-Decision")}> Pour Decision GitHub Repo</a>
            <br></br>
            <b className="popupbox-text-icon" data-tip data-for="app"><FontAwesomeIcon icon={faLaptop} /></b>
            <a className="hyper-link" onClick={() => window.open("https://jrtwheeler.github.io/Pour-Decision/")}> Pour Decision Heroku Deployment</a>
        </>
    )
    PopupboxManager.open({ content })
}

export default openPopupboxPour;