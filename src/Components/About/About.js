import React from "react";
import "../../App.css";
import logo from "../../Images/logo.png";
import about from "../../Images/about-us.jpeg";
import AboutCard from "./AboutCard.js";
import partners from "../../Images/our-partners.jpeg";
import team from "../../Images/our-team.jpeg";
import TitleCard from "../titlesCard/TitleCard.js";

function About() {
  return (
    <>
      <TitleCard
        isImage={true}
        logo={logo}
        title="ABOUT"
        info="Who we are and what we do"
      />
      <AboutCard
        isReversed={false}
        imgUrl={about}
        title="ABOUT US"
        info="Learn more about our lifesaving work"
      />
      <AboutCard
        bkgColor={"#d8f0de"}
        btnColor={"#00c39b"}
        isReversed={true}
        imgUrl={partners}
        title="OUR PARTNERS"
        info="We are proud to work with these organisations"
      />
      <AboutCard
        bkgColor={"#f7dbc3"}
        btnColor={"#ff821e"}
        isReversed={false}
        imgUrl={team}
        title="MEET THE TEAM"
        info="Get to know our dedicated international team"
      />
    </>
  );
}
export default About;
