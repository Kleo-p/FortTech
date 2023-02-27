import React, { useState } from "react";
import Testi from "./Testi";
import db from "./db";

export default function Testimony() {
  const [dbVal, setDbVal] = useState(db);
  const [range, setRange] = useState([0, 3]);
  const [display, setDisplay] = useState(dbVal.slice(range[0], range[1]));
  const dbArr = display.map((x) => <Testi key={x.key} {...x} />);

  function changeTestiNext() {
    if (range[1] === dbVal.length) {
      setRange([range[1] - dbVal.length, range[1] - dbVal.length + 3]);
      setDisplay(dbVal.slice(range[0], range[1]));
      console.log(display);
    } else {
      setRange([range[0] + 1, range[1] + 1]);
      setDisplay(dbVal.slice(range[0], range[1]));
      console.log(display);
    }
  }
  function changeTestiPrev() {
    if (range[0] === 0) {
      setRange([range[0] + dbVal.length - 3, range[0] + dbVal.length]);
      setDisplay(dbVal.slice(range[0], range[1]));
      console.log(display);
    } else {
      setRange([range[0] - 1, range[1] - 1]);
      setDisplay(dbVal.slice(range[0], range[1]));
      console.log(display);
    }
  }

  return (
    <>
      <div className="tests">
        <div>
          <h5 id="test">Testimonies</h5>
          <h4>See what our clients say about us</h4>
        </div>
        <div className="testimonies">{dbArr}</div>
        <div>
          <button className="btn" onClick={changeTestiPrev}>prev</button>
          <button className="btn" onClick={changeTestiNext}>next</button>
        </div>
      </div>
    </>
  );
}
