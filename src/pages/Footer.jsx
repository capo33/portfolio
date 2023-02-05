import React from "react";
import { FaBootstrap, FaSass } from "react-icons/fa";
import { SiMaterialUi, SiStyledComponents } from "react-icons/si";
import { DiCss3 } from "react-icons/di";

import "../../src/styles/css/footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      // height: "100vh",
    }}>
      <div className='footer-content'>
        <h3>
          Portfolio built using React
          <div
            style={{
              fontSize: "1.5rem",
              color: "yellow",
              display: "inline-flex",
            }}
            className='heart'
          >
            ❤
          </div>
        </h3>
        <ul>
          <li className="styles">
            Styles i used [{" "}
            <i style={{ fontSize: "1.5rem", color: "yellow" }}>
              <FaBootstrap /> - <DiCss3 /> - <FaSass /> - <SiMaterialUi /> -
              <SiStyledComponents />
            </i>
            ]
          </li>
        </ul>
        <p>Copyright © {year} Capo. All rights reserved. </p>
      </div>
    </footer>
  );
}

export default Footer;
