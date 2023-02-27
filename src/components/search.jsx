import React from "react";
import "./One.css";

export default function Search() {
  return (
    <div className="search">
      <div className="searchBar">
        <input
          className="inp"
          type="text"
          name="search"
          placeholder="I am searching for..."
        />
        <img className="searchIcon" src="search-solid.svg" alt="search-icon" />
        <button className="searchBut">search</button>
      </div>
      <div className="sec">
        <h5>
          repellendus, minus blanditiis, ab pariatur recusandae quis quo. Facere
          id dolorem unde, quidem veniam similique libero vel!
        </h5>
        <h5>
          <p className="what">What we do</p>
          repellendus, minus blanditiis, ab pariatur recusandae quis quo. Facere
          id dolorem unde, quidem veniam similique libero vel!
        </h5>
      </div>
    </div>
  );
}
