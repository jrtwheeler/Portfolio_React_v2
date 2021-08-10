import React from "react";
import logo from "../../mn_portrait.jpg";
import {Link} from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand" href="#"><img className="avatar" src={logo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth="true" to="home" className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth="true" to="about" className="nav-link" href="#">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth="true" to="services" className="nav-link" href="#">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth="true" to="experience" className="nav-link" href="#">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth="true" to="portfolio" className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth="true" to="contacts" className="nav-link" href="#">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

