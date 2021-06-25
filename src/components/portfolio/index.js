import React from "react";
import "./style.css";
import Walter from "../../assets/walters_app.PNG";
import Bike from "../../assets/bike_shop.PNG";
import Pour from "../../assets/pour_decision.jpg";

const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={Walter} alt="Walters Art Gallery Project" />
                        <div className="overflow"></div>
                    </div>
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={Bike} alt="Bike Shop Project" />
                        <div className="overflow"></div>
                    </div>
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={Pour} alt="Pour Decisions Project" />
                        <div className="overflow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;