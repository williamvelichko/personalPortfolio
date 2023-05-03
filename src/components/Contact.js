import React, { useState, useRef, useEffect } from "react";
import "../Styling/Contact.css";
import emailjs from "emailjs-com";
import CheckIcon from "@mui/icons-material/Check";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoadingClip from "../widgets/LoadingClip";

function Contact() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sentEmail, setSentEmail] = useState("");

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (userInfo.email === "" || userInfo.message === "") {
      setSentEmail("Fail");
    } else {
      emailjs
        .sendForm(
          "service_421yl7l",
          "template_l39ih65",
          form.current,
          "CXC1LgWkSSiP7QhE0"
        )
        .then(
          (result) => {
            setSentEmail("Sent");

            console.log(result.text);
            console.log("success");
          },
          (error) => {
            console.log(error.text);
            console.log("fail");
          }
        );
    }
  };
  if (loading) return <LoadingClip />;
  else
    return (
      <div className="contactForm_container">
        <div className="contactForm_title">
          <h1>Contact Me</h1>
        </div>

        <div className="form_container">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <h2>Get In Touch</h2>
            <input
              type="name"
              placeholder="name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder={sentEmail === "Fail" ? "email required" : "email"}
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              style={{
                borderColor: sentEmail === "Fail" && "red",
              }}
            />
            <textarea
              type="message"
              placeholder={
                sentEmail === "Fail" ? "message required" : "message"
              }
              name="message"
              rows="8"
              value={userInfo.message}
              onChange={handleChange}
              style={{
                borderColor: sentEmail === "Fail" && "red",
              }}
            ></textarea>
            {sentEmail === "Sent" ? (
              <div className="sent_email">
                <p>
                  Success <CheckIcon sx={{ backgroundColor: "green" }} />
                </p>
              </div>
            ) : (
              <button type="submit" className="submit_button">
                Submit
              </button>
            )}
          </form>
          <div className="contact_media">
            <h2>Contact Info</h2>
            <div className="contact_info_div">
              <div className="contact_media_div">
                <p className="contact_icons">
                  <LocationOnIcon sx={{ backgroundColor: "#00509d" }} />
                </p>
                <p>Sacramento, California</p>
              </div>
              <div className="contact_media_div">
                <p className="contact_icons">
                  <LocalPhoneIcon sx={{ backgroundColor: "#00509d" }} />
                </p>
                <p>(916)-882-6630</p>
              </div>
              <div className="contact_media_div">
                <p className="contact_icons">
                  <MailIcon sx={{ backgroundColor: "#00509d" }} />
                </p>
                <p>williamvelichko2003@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;
