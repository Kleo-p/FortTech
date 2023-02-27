import React from "react";
import "./One.css";

export default function Testi(props) {
  return (
    <div className="introAll">
      <div className="intro">
        <p>{props.about}</p>
      </div>
      <div className="lower">
        <img className="pix" src={props.image} alt="id"/>
        <div>
          <h5>{props.names}</h5>
          <p>{props.title}</p>
          <p>{props.more}</p>
        </div>
      </div>
    </div>
  );
}
