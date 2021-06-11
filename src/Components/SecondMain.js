import React from "react";
import "../App.css";
import photo from "../Images/photo-sign-up.jpg";

function SecondMain() {
  return (
    <div className="second-main">
      <div className="scris">
        <h1 className="subtitle">JOIN THE NEW YEAR'S REVOLUTION</h1>
        <p className="second-main-p">
          {" "}
          Veganuary inspired and supported more than half a million people to
          try vegan during our 2021 campaign – with participants from over 200
          countries and territories. We have worked with businesses to drive up
          vegan food provision in shops and restaurants, and have made veganism
          more visible and accessible through our work with national and
          international media.
        </p>
        <div className="btns">
          <button className="btn-1">Sign up now</button>
          <button className="btn-2">Learn more</button>
        </div>
      </div>
      <img class="photo-sign-up" src={photo} />
    </div>
  );
}
export default SecondMain;
