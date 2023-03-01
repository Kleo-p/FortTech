import React from "react";
import { useState } from "react";

export default function SecSection() {
  const [email, setEmail] = useState();
  return (
    <div className="allSubSec">
      <div className="subSec">
        <div className="subs">
          <h4>
            Subscribe to get the latest <br />
            news about us
          </h4>
          <p>Please drop your details to get daily updates from us</p>
        </div>
        <div className="searchBar">
          <input
            className="inp"
            type="text"
            name="search"
            // value={email}
            placeholder="Enter your email here"
          />
          <button className="searchBut">Subscribe</button>
        </div>
      </div>
      <img id="guy" src="./3426526.jpg" alt="" />
    </div>
  );
}
