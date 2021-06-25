import React from "react";
import "./style.css";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
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
            </div>
        </div>
    )
}

export default Header;