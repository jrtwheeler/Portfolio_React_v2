import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
//AVATARS
import avatar1 from "../../assets/avatars/avatar-1.png";
import avatar2 from "../../assets/avatars/avatar-2.png";
import avatar3 from "../../assets/avatars/avatar-3.png";
import avatar4 from "../../assets/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <img src={avatar1} alt="John Doe 1" />
                <div className="myCarousel">
                    <h5>Dan Rosenbaum</h5>
                    <p className="testimonial-paragraph">I had the privilege of being Jim's TA when he attended Johns Hopkins University's demanding 24 week web development bootcamp. I watched him excel through a tough, in-depth program that many describe as 'the most challenging academic endeavor' they have sought to conquer. Throughout the program, he gave every ounce of effort possible to learn HTML, CSS, JavaScript, jQuery, RESTFUL APIs, SQL with MySQL, NoSQL with MongoDB, React, and the MERN stack. 
                    </p>
                </div>
            </>
            <>
                <img src={avatar2} alt="John Doe 2" />
                <div className="myCarousel">
                    <h5>John Doe 2</h5>
                    <p className="testimonial-paragraph">Lorem ipsum</p>
                </div>
            </>
            <>
                <img src={avatar3} alt="John Doe 3" />
                <div className="myCarousel">
                    <h5>John Doe 3</h5>
                    <p className="testimonial-paragraph">Lorem ipsum</p>
                </div>
            </>
            <>
                <img src={avatar4} alt="John Doe 4" />
                <div className="myCarousel">
                    <h5>John Doe 4</h5>
                    <p className="testimonial-paragraph">Lorem ipsum</p>
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel;