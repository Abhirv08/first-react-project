import React from "react";
import twitter from './images/twitter.png'
import fb from './images/fb.png'
import insta from './images/insta.png'
import github from './images/github.png'

export default function Footer() {
  return (
    <div className="socialmedia">
      <div>
        {" "}
        <img src={twitter} />{" "}
      </div>
      <div>
        {" "}
        <img src={fb} />{" "}
      </div>
      <div>
        {" "}
        <img src={insta} />{" "}
      </div>
      <div>
        {" "}
        <img src={github}  />{" "}
      </div>
    </div>
  );
}
