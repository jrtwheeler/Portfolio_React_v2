import React from "react";
import ExperienceCard from "../experience_card"
import "./style.css";

const Experience = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Work Experience and Education</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <ExperienceCard
                            title={"2017 – present Stanley Black and Decker"}
                            body={"Use critical thinking, agile thinking, communication and project management skills to manage a global six person technical writing team with team members based in UK, China, and the United States. Create, develop and implement Adobe stack automations that reduce labor hours by 20 weeks in 2020 and 40 weeks in 2019. Create and develop and implement North American template that reduces paper costs by 18% to 20%."}
                        />
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <ExperienceCard
                            title={"Fullstack Web Development Certificate, Johns Hopkins University, Baltimore, MD, 2021"}
                            body={"A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS."}
                        />
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <ExperienceCard
                            title={"Fullstack Web Development, Udemy, Online, 2021"}
                            body={"A 55-hour full stack web development course focused on Front-End Web Development, HTML 5, CSS 3, Bootstrap 4, Javascript ES6, DOM Manipulation, jQuery, Bash Command Line, Git, GitHub and Version Control, Backend Web Development, Node.js, NPM, Express.js, EJS, REST, APIs, Databases, SQL, MongoDB, Mongoose, Authentication, Firebase, React.js, React Hooks, Web Design, Deployment with GitHub Pages, Heroku and MongoDB Atlas."}
                        />
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <ExperienceCard
                            title={"Fullstack Web Development Certificate, Codecademy, Online"}
                            body={"Completed online classes: Code Foundations, Learn HTML, Learn Python 3, Learn Git, Learn Command Line, Learn SASS"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience