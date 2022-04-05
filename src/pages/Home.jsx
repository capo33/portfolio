import React, { useRef } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import code from "../assets/images/179.svg";
import "../styles/css/heropage.css";
import HomePage from "./Home/HomePage";

function Home() {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            collisions: {
              enable: true,
              bounce: true,
              mode: "bounce",
            },
            color: {
              value: "#2666CF",
            },
          },
          line_linked: {
            shadow: {
              enable: true,
              color: "#ffd369",
              blur: 50,
              offset: {
                x: 0,
                y: 0,
              },
            },
          },

          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div className="main">
        <section className="header-bg align-items-center d-flex">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-md-6 ">
                <div className="header-title">
                  <p className=" text-uppercase header-small-title title ">
                    Hello!
                    <span className="wave" role="img" aria-labelledby="wave">
                      {" "}
                      👋🏻{" "}
                    </span>
                  </p>
                  <h1 className="font-weight-bold main-title mb-4">
                    Welcome to my portfolio
                  </h1>
                  <Link to="/projects">
                    <button className="button">
                      Explore
                      <HiOutlineArrowNarrowRight className="ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="image">
                  <img src={code} alt="code" className="image" />
                </div>
              </div>
              <div className="col-lg-12 mt-3 mb-3  ">
                <div>
                  <div className="mouse_scroll" onClick={executeScroll}>
                    <div>
                      <span className="m_scroll_arrows one"></span>
                      <span className="m_scroll_arrows two"></span>
                      <span className="m_scroll_arrows three"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span ref={myRef}></span>
      </div>
      <HomePage />
    </div>
  );
}

export default Home;
