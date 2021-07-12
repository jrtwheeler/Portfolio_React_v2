import React from 'react';
import emailjs from 'emailjs-com';
import env from "react-dotenv";

// import './ContactUs.css';

const Contacts = () => {

    const REACT_APP_USER_ID = env.REACT_APP_USER_ID;
    const REACT_APP_TEMPLATE_ID = env.REACT_APP_TEMPLATE_ID;
    const REACT_APP_SERVICE_ID = env.REACT_APP_SERVICE_ID;
    console.log(REACT_APP_SERVICE_ID)
    console.log(REACT_APP_TEMPLATE_ID)
    console.log(REACT_APP_USER_ID)
    console.log(env)

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
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contacts;
