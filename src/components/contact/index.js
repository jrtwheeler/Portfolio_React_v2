import React from "react";

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="text-center">
            <h1>contact me</h1>
            <p></p>
            </div>
            <dic className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME */}
                        <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"/>
                        {/* PHONE */}
                        <input
                        id=""
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"/>
                        {/* EMAIL */}
                        <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"/>
                        {/* SUBJECT */}
                        <input
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"/>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <textarea
                        id="description"
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        email="email"
                        ></textarea>
                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                    </div>
                </div>
            </dic>
        </div>
    )
}

export default Contacts;