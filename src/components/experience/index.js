import React from "react";
import ExperienceCard from "../experience_card"

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
                            title={""}
                            body={""}
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

export default Experience