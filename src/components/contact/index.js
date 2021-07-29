import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "yup-phone";
import env from "react-dotenv";
import "./style.css";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();
    const REACT_APP_USER_ID = env.REACT_APP_USER_ID;
    const REACT_APP_TEMPLATE_ID = env.REACT_APP_TEMPLATE_ID;
    const REACT_APP_SERVICE_ID = env.REACT_APP_SERVICE_ID;
    console.log(REACT_APP_SERVICE_ID)
    console.log(REACT_APP_TEMPLATE_ID)
    console.log(REACT_APP_USER_ID)
    console.log(env)

    // form validation rules
    const validationSchema = Yup.object().shape({
        id: Yup.string(),
        name: Yup.string().required("Design Name is required"),
        created_by: Yup.string().required("Designer Name is required"),
        comment: Yup.string(),
    });

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, e.target, REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    {...register("name", { required: "Please enter your name." })}
                                />
                                <div className="line"></div>
                            </div>
                            {/* <span className="error-message">
                {errors.name && errors.name.message}
              </span> */}
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    name="phone"
                                    {...register("phone", { required: "Please enter your phone number." })}
                                />
                                <div className="line"></div>
                            </div>
                            {/* <span className="error-message">
                {errors.phone && errors.phone.message}
              </span> */}
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    {...register("email", { required: "Please enter your email." })}
                                />
                                <div className="line"></div>
                            </div>
                            {/* <span className="error-message">
                {errors.email && errors.email.message}
              </span> */}
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    {...register("subject", { required: "Please enter a subject." })}
                                />
                                <div className="line"></div>
                            </div>
                            {/* <span className="error-message">
                {errors.subject && errors.subject.message}
              </span> */}
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Please provide a short description of your project..."
                                    name="description"
                                    {...register("description", { required: "Please enter a short description of the job." })}
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            {/* <span className="error-message">
                {errors.description && errors.description.message}
              </span> */}
                            <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;
