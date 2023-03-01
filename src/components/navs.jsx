import React from "react";
import { Link } from "react-router-dom";

export default function Navs() {
  return (
    <div>
      <div className="all">
        <p className="logoo">
          Forth<span>Tech</span>
        </p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="services">Services</Link>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
