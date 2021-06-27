import React from "react";
import "./style.css";
import Walter from "../../assets/walters_app.PNG";
import Bike from "../../assets/bike_shop.PNG";
import Pour from "../../assets/pour_decision.jpg";
//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faLaptop } from "@fortawesome/free-solid-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import openPopupboxWalter from "./walter.js";
import openPopupboxBike from "./bike.js";
import openPopupboxPour from "./pour.js";

const Portfolio = () => {

    const popupboxConfigWalter = {
        titleBar: {
            enable: true,
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const popupboxConfigBike = {
        titleBar: {
            enable: true,
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const popupboxConfigPour = {
        titleBar: {
            enable: true,
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxWalter}>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        <img className="portfolio-image" src={Walter} alt="Walters Art Gallery Project" />
                        <div className="overflow"></div>

                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxBike}>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        <img className="portfolio-image" src={Bike} alt="Bike Shop Project" />
                        <div className="overflow"></div>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxPour}>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        <img className="portfolio-image" src={Pour} alt="Pour Decisions Project" />
                        <div className="overflow"></div>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigWalter} />
            <PopupboxContainer {...popupboxConfigBike} />
            <PopupboxContainer {...popupboxConfigPour} />
        </div>
    )
}

export default Portfolio;