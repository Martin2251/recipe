import React from "react";
import about from "../../Images/about.jpg";

function TitleCardRecipe(props) {
  return (
    <div
      className="about-photo"
      style={{
        backgroundImage: props.isImage
          ? `url(${props.image})`
          : `url(${about})`,
      }}
    >
      <div className="about-scris">
        {/* <img className="logo" src={props.logo} /> */}
        <h1> {props.title}</h1>
        <p className="who-we-are">{props.info}</p>
      </div>
    </div>
  );
}

export default TitleCardRecipe;
