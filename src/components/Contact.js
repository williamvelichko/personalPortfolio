import React, { useState } from "react";

function Contact() {
  const [userInfo, SetUserInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="container">
      <h2>Contact</h2>
      <div className="form_container">
        <form>
          <input
            type="name"
            placeholder="name"
            name="name"
            value={userInfo.name}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={userInfo.email}
          />
          <textarea
            type="message"
            placeholder="message"
            name="message"
            value={userInfo.message}
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
