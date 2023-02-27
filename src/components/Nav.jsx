import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div className="all">
        <p className="logoo">
          Forth<span>Tech</span>
        </p>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
