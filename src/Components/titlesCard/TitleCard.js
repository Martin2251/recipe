import React from "react";
import about from "../../Images/about.jpg";

function TitleCard(props) {
  return (
    <div
      className="about-photo"
      style={{
        backgroundImage: props.isImage ? `url(${about})` : "none",
        backgroundColor: props.bkgColor,
        height: props.hgt,
      }}
    >
      <div className="about-scris">
        <img className="logo" src={props.logo} />
        <h1>{props.title}</h1>
        <p className="who-we-are">{props.info}</p>
      </div>
    </div>
  );
}
export default TitleCard;
