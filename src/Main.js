import React from "react";
import mail from './images/mail.png'
import linkedin from './images/linkedin.png'


export default function Main() {
  return (
    <div className="main-body">
      <div className="nameanddesignation">
        <h1>Laura Smith </h1>
        <h5>Frontend Developer</h5>
        <h6>laurasmith.website</h6>
      </div>
      <div className="social">
        <button className="mailbutton">
          {" "}
          <img src={mail} /> Email
        </button>
        <button className="linkdinbutton">
          {" "}
          <img src={linkedin} /> Linkedin
        </button>
      </div>
      <div className="aboutandintrest">
        <div className="about">
          <h2>About</h2>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="Intrests">
          <h2>Intrests</h2>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </div>
  );
}
