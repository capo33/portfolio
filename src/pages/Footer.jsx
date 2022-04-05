import React from "react";
import "../../src/styles/css/footer.css";
import { FaBootstrap, FaSass } from "react-icons/fa";
import { SiMaterialUi, SiStyledComponents } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
function Footer() { 
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <ul>
        <li>This portfolio was built using React ❤</li>
        <li>
          I used all my developmental skills as a student to create and design
          it.
        </li>
        <li>
          Styles i used [{" "}
          <i style={{ fontSize: "1.5rem" }}>
            {" "}
            <FaBootstrap /> - <DiCss3 /> - <FaSass /> - <SiMaterialUi /> -{" "}
            <SiStyledComponents />
          </i>
          ]
        </li>
        <li>---------</li>
        <li>Copyright © {year} Capo. All rights reserved.</li>
      </ul>
    </footer>
  );
}

export default Footer;
