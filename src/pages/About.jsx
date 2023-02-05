import React from "react";
import Image from "../assets/images/crop.jpg";
import { AboutData } from "../components/data/AboutData";
import styled from "styled-components";

const Main = styled.main`
  padding: 10% 0 0;
  color: #000;
  background-color: #fff;
  font-family: "Montserrat", sans-serif;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 1%;
  }

  @media screen and (min-width: 768px) {
    img {
      height: 100%;
    }
    @media screen and (max-width: 425px) {
      .image {
        margin-bottom: 20px;
      }
    }
  }

  @media screen and (max-width: 768px) {
  }
  .p_link {
    line-height: 2rem;
  }
  @media screen and (max-width: 768px), (max-width: 1024px) {
    .p_link {
      font-size: 1rem;
    }
  }

  .example-title {
    text-align: center;
    margin: 60px;
    padding: 1em 0;
    border-top: 1px solid #e4eaec;
  }
`;

export default function About() {
  return (
    <>
      <Main>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-4 mb-5">
              <img src={Image} alt="Capo" />
            </div>
            <div className="col-xs-12 col-md-8">
              <h3>Snippets </h3>
              {AboutData.map((item) => {
                return (
                  <p key={item.id} className="p_link">
                    {item.title}
                    {item.icon}
                    {item.title4}
                    {item.icon4}
                    {item.title1}
                    {item.icon1}
                    {item.title2}
                    {item.icon2}
                    {item.title3}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
