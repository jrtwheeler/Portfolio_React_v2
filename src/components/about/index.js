import React from "react";
import portrait from "../../mn_portrait.jpg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <img className="float-left mr-2 mb-2 portrait" src={portrait} alt="" />
                </div>
                <div className="col-lg-6 col-xm-12 aboutCopy">
                    <h1 className="aboutMeHeader">about me</h1>
                    <hr></hr>
                    <p>
                        Front-end web developer leveraging design and writing background to build a more intuitive user experience
                        on the web. Certified in full stack development from the University of Johns Hopkins, with experience in
                        JavaScript, CSS, HTML, JQUERY and responsive web design. Citizen coder who designed automations in
                        JavaScript and Python for Adobe stack for Stanley Black and Decker that saved the company forty weeks of
                        manual data entry a&nbsp;year.
                    </p>
                    <p>
                        My automated layout system merited an Eagle Award for SBD employee of the year. To
                        build the system, I taught myself JavaScript and Python on weekends. I applied agile design to develop the
                        system. I improve efficiency. I have fifteen years of supervisor experience. I am a committed lifelong
                        learner who is willing to educate myself through any available means. Experienced in meeting and beating&nbsp;deadlines.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe