import React from "react";
import "./style.css";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>web development and website promotions</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer"/>
            </div>
        </div>
    )
}

export default Header;