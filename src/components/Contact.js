import React, { useRef, useState } from "react";
import "../styles/components/_contact.scss";
import "../styles/_global.scss";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import planeIcon from "../assets/plane-icon.png";
import contactIllustration from "../assets/contact.png";
import emailIcon from "../assets/email-icon.png";
import Button from "../UI/Button";

const Contact = () => {
  const form = useRef();
  const username = useRef();
  const email = useRef();
  const formMessage = useRef();

  const [mailSent, setMailSent] = useState(false);

  const [sendPlane, setSendPlane] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      username.current.value.length > 0 &&
      formMessage.current.value.length > 0
    ) {
      emailjs
        .sendForm(
          "service_5p430ui",
          "template_4kdklth",
          form.current,
          "1VFsqlgTRCwfQkgfi"
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setSendPlane(true);
              setTimeout(() => {
                setMailSent(true);
              }, 1000);
            }
          },
          (error) => {
            alert(error);
          }
        );
    } else {
      alert("Please, fill every field.");
    }
  };

  const resetForm = () => {
    setMailSent(false);
    setSendPlane(false);
  };

  const formHolder = (
    <div className="contact__formHolder">
      <h2>Get in Touch</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" ref={username} />
        <label>Email</label>
        <input type="email" name="user_email" ref={email} />
        <label>Message</label>
        <textarea name="message" ref={formMessage} />
        <Button type="submit">
          Submit
          <img
            src={planeIcon}
            alt="send msg icon"
            className={sendPlane ? "activePlane" : ""}
          />
        </Button>
      </form>
      <div className="contact__emailHolder">
        <img src={emailIcon} alt="email icon" />
        <p>zkovachevic@gmail.com</p>
      </div>
    </div>
  );

  const notificationHolder = (
    <div className="contact__notificationHolder">
      <div>
        <h2> E-MAIL SENT ! </h2>
        <p>
          Thanks for contacting me.
          <br />
          Expect reply soon.
        </p>
      </div>
      <Button className="blueButton" type="button" onClick={resetForm}>
        Return
      </Button>
    </div>
  );

  return (
    <div className="contact" id="contact">
      <div className="contact__holder">
        {mailSent ? notificationHolder : formHolder}
      </div>
    </div>
  );
};

export default Contact;
