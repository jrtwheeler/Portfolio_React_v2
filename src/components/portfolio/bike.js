import React from "react";
import ReactTooltip from "react-tooltip";
import "./style.css";
import Bike from "../../assets/bike_shop.PNG";
//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const openPopupboxBike = () => {
    const content = (
        <>
            <img className="portfolio-image-popupbox mb-2" src={Bike} alt="New Bike Shop" />
            <h1>New Bike Shop</h1>
            <hr></hr>
            <p className="popupbox-text">Bicycle App shop is an application that allows users to select bicycles by brand name, 
            accessories, and service request. The user will have the ability to view the actual image of their selection along 
            with the price and inventory in –stock associated with each item. This webpage contains fully functional forms for 
            the users and members to sign in, along with operational features that allow them to easily navigate , view options, 
            make selections, and checkout successfully</p>
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
            <a className="hyper-link" onClick={() => window.open("https://github.com/chernanma/New-Bike-Shop")}> New Bike Shop GitHub Repo</a>
            <br></br>
            <b className="popupbox-text-icon" data-tip data-for="app"><FontAwesomeIcon icon={faLaptop} /></b>
            <a className="hyper-link" onClick={() => window.open("https://new-bike-shop.herokuapp.com/")}> New Bike Shop Heroku Deployment</a>
        </>
    )
    PopupboxManager.open({ content })
}

export default openPopupboxBike;