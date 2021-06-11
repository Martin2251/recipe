import React from "react";
import "../../App.css";

function AboutCard(props) {
  return (
    <div
      className="about-us-container"
      style={{
        flexDirection: props.isReversed ? "row-reverse" : "row",
        backgroundColor: props.bkgColor,
      }}
    >
      <img className="about-us" src={props.imgUrl} alt="about-us"></img>
      <div className="about-us-right">
        <h1>{props.title}</h1>
        <p>{props.info}</p>
        <button
          className="search-btn"
          style={{ backgroundColor: props.btnColor }}
        >
          Find out more
        </button>
      </div>
    </div>
  );
}
export default AboutCard;
