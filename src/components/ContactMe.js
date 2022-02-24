import React, { useState } from "react";
import emailjs from "emailks-com";

const ContactMe = () => {
  /*this will have a small form that
  allows users to send an email to me*/

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      const result = emailjs.sendForm(
        "service_47x5uxr",
        "template_b4g7brk",
        form.current,
        "user_Wmks99BDH6J3IcHYxSmQL"
      );
      console.log(result.text);
    } catch (err) {
      console.error(err.text);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <h3>
        Feel free to get in touch by emailing me at emelie.moya@aol.com or
        through the form below. I look forward to speaking with you!
      </h3>

      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
        </div>

        <div>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
        </div>

        <div>
          <textarea
            placeholder="Put your message here!"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            rows="15"
            cols="20"
            required
          />
        </div>

        <button type="submit" value="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
