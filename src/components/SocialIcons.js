import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Socialicons = [
  {
    id: 1,
    iconLink: "https://www.linkedin.com/in/mohamed-mahmoud-aa5ba5201",
    iconName: "Linkid",
    className: "icon linkedin social linkedin",
    icon: <FontAwesomeIcon icon={faLinkedin} size='2x' />,
  },
  {
    id: 2,
    iconLink: "https://github.com/capo33",
    iconName: "Github",
    className: "icon github social github",
    icon: <FontAwesomeIcon icon={faGithub} size='2x' />,
  },
  {
    id: 3,
    iconLink: "https://twitter.com/Mohamed33727072",
    iconName: "Twitter",
    className: "icon twitter social twitter",
    icon: <FontAwesomeIcon icon={faTwitter} size='2x' />,
  },
];

export default Socialicons;
