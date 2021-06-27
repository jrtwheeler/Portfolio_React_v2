import React from "react";
import TestimonialsCarousel from "../testimonials_carousel";

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h1>my happy clients</h1>
            <div className="container">
                <div className="testimonials-content">
                    <TestimonialsCarousel>
                    </TestimonialsCarousel>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;