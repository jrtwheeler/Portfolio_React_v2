import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import env from "react-dotenv";
import "./style.css";

const Contactsss = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();
    const userID = env.REACT_APP_userID;
    const templateID = env.REACT_APP_templateID;
    const serviceID = env.REACT_APP_serviceID;
    console.log(serviceID)
    console.log(templateID)
    console.log(userID)

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            console.log(data.name + " Here"),
            console.log(data.phone + " Here"),
            console.log(data.email + " Here"),
            console.log(data.subject + " Here"),
            console.log(data.description + " Here"),
            userID
        )

        r.target.reset();
    }

    const sendEmail = (variables) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
            }).catch(err => console.error(`Something went wrong ${err}`));
    }

    return (
        <div className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                                    placeholder="Please describe shortly you project..."
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

export default Contactsss;
