import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";
import {Link} from "react-scroll";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
      <div className="row space"></div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>XXXX XXXXX XXXXXXX XXXXXXX</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">XXX-XXX-XXXX</a>
            </div>
            <div className="d-flex">
              <p>greeking@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6 list">
            <div className="row">
              <div className="col">
                <Link smooth="true" to="home" offset={-110} className="footer-nav">Home</Link>
                <br />
                <Link smooth="true" to="about" offset={-110} className="footer-nav">About me</Link>
                <br />
                <Link smooth="true" to="services" offset={-110} className="footer-nav">Services</Link>
              </div>
              <div className="col">
                <Link smooth="true" to="experience" offset={-110} className="footer-nav">Experience</Link>
                <br />
                <Link smooth="true" to="portfolio" offset={-110} className="footer-nav">Portfolio</Link>
                <br />
                <Link smooth="true" to="contacts" offset={-110} className="footer-nav">Contacts</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center share">
            <div className="d-flex justify-content-center mt-4">
              <FacebookShareButton
                url={"https://www.youtube.com"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.youtube.com"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://www.youtube.com"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://www.youtube.com"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;wheele1 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
