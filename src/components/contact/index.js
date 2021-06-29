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
                        <input
                        className="form-control"
                        placeholder="Name"
                        name="name"/>
                        <input
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"/>
                        <input
                        className="form-control"
                        placeholder="Email"
                        name="email"/>
                        <input
                        className="form-control"
                        placeholder="Subject"
                        name="subject"/>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <textarea
                        className="form-control"
                        placeholder=""
                        email=""
                        ></textarea>
                    </div>
                </div>
            </dic>
        </div>
    )
}

export default Contacts;