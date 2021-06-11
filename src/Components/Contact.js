import React from "react";
import TitleCard from "./titlesCard/TitleCard";
import logo from "../Images/logo.png";

function Contact() {
  return (
    <div>
      <TitleCard
        logo={logo}
        title="CONTACT US"
        info="We’d love to hear from you"
        isImage={false}
        bkgColor={"#0f0000"}
        hgt={"300px"}
      />
      <div className="before-contact">
        <p>
          Please help us by reviewing these FAQs before you get in touch. Your
          question may already be answered!
        </p>
      </div>
      <div className="inputs">
        <input className="input-name" type="text" placeholder="Name" />
        <input className="input-surname" type="text" placeholder="Surname" />
        <input className="input-email" type="text" placeholder="Email" />
        <input className="input-message" type="text" placeholder="Message" />

        {/* <input type="checkbox" >I have read and agree to the privacy policy */}
      </div>
      <div className="send-btn">
        <button className="search-btn">Send</button>
      </div>
    </div>
  );
}
export default Contact;
