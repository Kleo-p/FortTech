import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="foot">
        <div>
          <h5>FORTH TECH</h5>
          <p>
            Address: <br /> No. 4, beside National Library, Jos, Plateau state
          </p>
        </div>
        <div className="social">
          <p>Stay connected with us</p>
          <div id="simages">
            <ul>
              <li>
                <a href="#">
                  <img src="./facebook icon.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./google icon.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./Instagram_icon.png.webp" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./linkedin icon.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./Twitter-logo.svg.webp" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./whatsap icon.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./IMG_1956.PNG" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="links">
          <h5>Quick links</h5>
          <ul>
            <li>
              <a href="#">Home</a>{" "}
            </li>
            <li>
              <a href="#">Our Services</a>{" "}
            </li>
            <li>
              <a href="#">About Us</a>{" "}
            </li>
            <li>
              <a href="#">Contact Us</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
