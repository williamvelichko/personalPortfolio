import React, { useState, useRef, useEffect } from "react";
import "../Styling/Contact.css";
import emailjs from "emailjs-com";
import CheckIcon from "@mui/icons-material/Check";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoadingClip from "../widgets/LoadingClip";

function Contact(props) {
  const formRef = useRef();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sentEmail, setSentEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!userInfo.email || !userInfo.message) {
      setSentEmail("Fail");
    } else {
      emailjs
        .sendForm(
          "service_421yl7l",
          "template_l39ih65",
          formRef.current,
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

  const isError = sentEmail === "Fail";
  if (loading && !props.onLandingPage) return <LoadingClip />;
  else
    return (
      <div className="contactForm_container">
        <div className="contactForm_title">
          <h1>Contact Me</h1>
        </div>
        <div className="form_container">
          <form className="form" ref={formRef} onSubmit={sendEmail}>
            <h2>Get In Touch</h2>
            <input
              type="text"
              placeholder={isError ? "Name required" : "Name"}
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              className={isError ? "error" : ""}
              style={{
                borderColor: sentEmail === "Fail" && "red",
              }}
            />
            <input
              type="email"
              placeholder={isError ? "Email required" : "Email"}
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              className={isError ? "error" : ""}
              style={{
                borderColor: sentEmail === "Fail" && "red",
              }}
            />
            <textarea
              placeholder={isError ? "Message required" : "Message"}
              name="message"
              rows="8"
              value={userInfo.message}
              onChange={handleChange}
              className={isError ? "error" : ""}
              style={{
                borderColor: sentEmail === "Fail" && "red",
              }}
            ></textarea>
            {sentEmail === "Sent" ? (
              <div className="sent_email">
                <p>
                  Success <CheckIcon sx={{ backgroundColor: "transparent" }} />
                </p>
              </div>
            ) : (
              <button type="submit" className="submit_button">
                <p>Submit</p>
              </button>
            )}
            <div className="contact_media">
              <h2>Contact Info</h2>
              <div className="contact_info_div">
                <div className="contact_media_div">
                  <p className="contact_icons">
                    <LocationOnIcon sx={{ backgroundColor: "transparent" }} />
                  </p>
                  <p>Sacramento, California</p>
                </div>
                <div className="contact_media_div">
                  <p className="contact_icons">
                    <LocalPhoneIcon sx={{ backgroundColor: "transparent" }} />
                  </p>
                  <p>(916)-882-6630</p>
                </div>
                <div className="contact_media_div">
                  <p className="contact_icons">
                    <MailIcon sx={{ backgroundColor: "transparent" }} />
                  </p>
                  <p>williamvelichko2003@gmail.com</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Contact;
