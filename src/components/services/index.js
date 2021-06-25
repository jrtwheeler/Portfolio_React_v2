import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faServer, faMobile } from "@fortawesome/free-solid-svg-icons";
import Card from "../card"

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <Card
                                title={"FrontEnd  "}
                                icon={faLaptop}
                                languageOne={"Javascript"}
                                languageTwo={"CSS"}
                                languageThree={"HTML"}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <Card
                                title={"BackEnd  "}
                                icon={faServer}
                                languageOne={"MySQL"}
                                languageTwo={"MongoDB"}
                                languageThree={"Python"}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <Card
                                title={"Frameworks"}
                                languageOne={"React.js"}
                                languageTwo={"Express.js"}
                                languageThree={"Node.js"}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <Card
                                title={"Design Frameworks"}
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