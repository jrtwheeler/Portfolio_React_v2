import React from "react";
import "./style.css";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>full stack web development</h1>
                <Typed
                    className="typed-text"
                    strings={["Front-End Web Development", "HTML 5", "CSS 3", "Bootstrap 4",
                        "JavaScript ES6", "DOM Manipulation", "jQuery", "Bash Command Line", "Git", "GitHub and Version Control", "Backend Web Development",
                        "Node.js", "NPM", "Express.js", "EJS", "REST", "APIs", "Databases", "SQL", "MongoDB", "Mongoose", "Authentication",
                        "Firebase", "React.js", "React Hooks", "Web Design", "Deployment with GitHub Pages", "Heroku and MongoDB Atlas",
                        "Python3", "Extendscript"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <a href="https://www.linkedin.com/in/james-w-54270740/" className="btn btn-outline-primary" rel="noreferrer"
                        target="_blank">Linked In</a>
                    <a href="https://github.com/jrtwheeler" className="btn btn-outline-primary" rel="noreferrer"
                        target="_blank">Github</a>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vTRm2WKIL8udaUOcZXCVm3yrinhqizl94i95SiFVBGaXU1iZIsq3B1RHFCroQ2Mg8V0x-Z4O9ex0TwF/pub" className="btn btn-outline-primary" rel="noreferrer"
                        target="_blank">Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Header;