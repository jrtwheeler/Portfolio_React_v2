import React from "react";
import ReactTooltip from "react-tooltip";
import "./style.css";
import Walter from "../../assets/walters_app.PNG";
//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const openPopupboxWalter = () => {
    const content = (
        <>
            <img className="portfolio-image-popupbox mb-2" src={Walter} alt="Walters Art Project" />
            <h1>Walter Art Gallery</h1>
            <hr></hr>
            <p className="popupbox-text">The Walters Art Gallery App gives the user a chance to visit the Walters Art Gallery 
            and view a "stunning panorama of thousands of years of art, from romantic 19th-century images of French gardens 
            to mesmerizing Ethiopian icons, richly illuminated Qur’ans and Gospel books, ancient Roman sarcophagi, 
            and serene images of the Buddha."</p>
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
            <a className="hyper-link" onClick={() => window.open("https://github.com/jrtwheeler/Walters_Art_Gallery_App")}> Walters Art Gallery GitHub Repo</a>
            <br></br>
            <b className="popupbox-text-icon" data-tip data-for="app"><FontAwesomeIcon icon={faLaptop} /></b>
            <a className="hyper-link" onClick={() => window.open("https://walters-art-museum.herokuapp.com/")}> Walters Art Gallery Heroku Deployment</a>
        </>
    )
    PopupboxManager.open({ content })
}

export default openPopupboxWalter;