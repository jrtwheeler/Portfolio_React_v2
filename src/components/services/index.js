import React from "react";
import { faLaptop, faServer } from "@fortawesome/free-solid-svg-icons";
import Card from "../card"

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Card
                                title={"Client-Side  "}
                                icon={faLaptop}
                                languageOne={"Javascript"}
                                languageTwo={"CSS"}
                                languageThree={"HTML"}
                            />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Card
                                title={"Server-Side  "}
                                icon={faServer}
                                languageOne={"MySQL"}
                                languageTwo={"MongoDB"}
                                languageThree={"Python"}
                            />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Card
                                title={"Javascript Frameworks"}
                                languageOne={"React.js"}
                                languageTwo={"Express.js"}
                                languageThree={"Node.js"}
                            />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Card
                                title={"CSS Frameworks"}
                                languageOne={"Bootstrap"}
                                languageTwo={"Bulma"}
                                languageThree={"Material"}
                            />
                        </div>
                    </div>
                </div>
            </h1>
        </div>
    )
}

export default Services