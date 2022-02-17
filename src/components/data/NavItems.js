import {v4 as uuidv4 } from "uuid"

export const navItems = [
  {
    id: uuidv4(),
    title: "Home",
    path: "./",
    cName: "nav_links",
  },
  {
    id: uuidv4(),
    title: "About",
    path: "/about",
    cName: "nav_links",
  },
  {
    id: uuidv4(),
    title: "Projects",
    path: "./projects",
    cName: "nav_links",
  },
  {
    id: uuidv4(),
    title: "Contact",
    path: "./contact",
    cName: "nav_links",
  },
];
