import React from "react";
import ExperienceCard from "../experience_card"
import "./style.css";

const Experience = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <ExperienceCard
                            title={"2017 – present"}
                            body={"Use critical thinking, agile thinking, communication and project management skills to manage a global six person technical writing team with team members based in UK, China, and the United States. Create, develop and implement Adobe stack automations that reduce labor hours by 20 weeks in 2020 and 40 weeks in 2019. Create and develop and implement North American template that reduces paper costs by 18% to 20%."}
                        />
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <ExperienceCard
                            title={"2006 – 2017"}
                            body={"jhgjhgkjgjkhgkjghjkgjgkgjkjkghjgjkgkgjhgjgjgjkg"}
                        />
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <ExperienceCard
                            title={"2017 – present"}
                            body={"Use critical thinking, agile thinking, communication and project management skills to manage a global six person technical writing team with team members based in UK, China, and the United States. Create, develop and implement Adobe stack automations that reduce labor hours by 20 weeks in 2020 and 40 weeks in 2019. Create and develop and implement North American template that reduces paper costs by 18% to 20%."}
                        />
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <ExperienceCard
                            title={"2006 – 2017"}
                            body={"jhgjhgkjgjkhgkjghjkgjgkgjkjkghjgjkgkgjhgjgjgjkg"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience