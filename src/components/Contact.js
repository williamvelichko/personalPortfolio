import React, { useState, useRef } from "react";
import "../Styling/Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const [userInfo, SetUserInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    SetUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_421yl7l",
        "template_l39ih65",
        form.current,
        "CXC1LgWkSSiP7QhE0"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("success");
        },
        (error) => {
          console.log(error.text);
          console.log("fail");
        }
      );
  };

  return (
    <div className="contactForm_container">
      <div className="contactForm_title">
        <h2>Contact Me</h2>
      </div>
      <div className="form_container">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <input
            type="name"
            placeholder="name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <textarea
            type="message"
            placeholder="message"
            name="message"
            rows="8"
            value={userInfo.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
