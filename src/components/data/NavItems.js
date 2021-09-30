import {v4 as uuidv4 } from "uuid"

export const navItems = [
  {
    id: uuidv4(),
    title: "Home",
    path: "./",
    cName: "nav-link",
  },
  {
    id: uuidv4(),
    title: "About",
    path: "/about",
    cName: "nav-link",
  },
  {
    id: uuidv4(),
    title: "Projects",
    path: "./projects",
    cName: "nav-link",
  },
  {
    id: uuidv4(),
    title: "Contact",
    path: "./contact",
    cName: "nav-link",
  },
];
