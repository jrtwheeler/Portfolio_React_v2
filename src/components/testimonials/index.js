import React from "react";
import "./style.css";
import TestimonialsCarousel from "../testimonials_carousel";

const Testimonials = () => {
    return (
        <div id="testimonials" className="testimonials">
            <h3 className="testimonials">testimonials</h3>
            <div className="container">
                <div className="testimonials-content">
                    <TestimonialsCarousel/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;