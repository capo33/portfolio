import React, { useRef } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
 
import "../styles/css/heropage.css";
import HomePage from "./Home/HomePage";
import "./homeStyle.css";
import Socialicons from "../components/SocialIcons";
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
            value: "#000",
          },
        },
        line_linked: {
          shadow: {
            enable: false,
            color: "#000",
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
      <div>
        <section className='home section' id='home'>
          <div className='home__container container grid'>
            <div className='home__content grid'>
              {/* <Social /> */}
              <div className='home__social grid'>
                {Socialicons.map((item) => {
                  return (
                    <a
                      href={item.iconLink}
                      className='home__social-icon'
                      target='_blank'
                      rel='noreferrer'
                      key={item.id}
                    >
                      {item.icon}
                    </a>
                  );
                })}
              </div>
              <div className='home__img'></div>
              {/* <Data /> */}
              <div className='home__data'>
                <h1 className='home__title'>
                  Hi, I'm Capo
                 <span className="wave" role="img" aria-labelledby="wave">
                  
                   👋🏻
                 </span>
                   {/* <svg
                    width='36'
                    height='36'
                    viewBox='0 0 48 48'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='home__hand'
                  >
                    <path
                      d='M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z'
                      fill='#FFDD67'
                    ></path>
                    <path
                      d='M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z'
                      fill='#EBA352'
                    ></path>
                    <path
                      d='M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z'
                      fill='#FFDD67'
                    ></path>
                    <path
                      d='M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z'
                      fill='#EBA352'
                    ></path>
                    <path
                      d='M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z'
                      fill='#FFDD67'
                    ></path>
                    <path
                      d='M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z'
                      fill='#EBA352'
                    ></path>
                    <path
                      d='M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z'
                      fill='#FFDD67'
                    ></path>
                    <path
                      d='M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z'
                      fill='#EBA352'
                    ></path>
                    <path
                      d='M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z'
                      fill='#FFDD67'
                    ></path>
                    <path
                      d='M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z'
                      fill='#EBA352'
                    ></path>
                  </svg> */}
                </h1>
                <h3 className='home__subtitle'> Software Developer</h3>
                <p className='home__description'>
                  I'm a junior software developer based in Finland. I'm
                  currently working at NordCloud.
                </p>

                <Link to='/projects'>
                  <button className='button'>
                    Explore
                    <HiOutlineArrowNarrowRight className='ml-2' />
                  </button>
                </Link>
              </div>
            </div>
            {/* <ScrollDown /> */}
            <div className='home__scroll'>
              <div onClick={executeScroll} className='button--flex'>
                <svg
                  width='32px'
                  height='32px'
                  className='home__scroll-mouse'
                  viewBox='0 0 247 390'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 1.5,
                  }}
                >
                  <path
                    className='wheel'
                    d='M123.359,79.775l0,72.843'
                    style={{
                      fill: "none",
                      stroke: "ButtonFace",
                      strokeWidth: "20px",
                    }}
                  ></path>
                  <path
                    id='mouse'
                    d='M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z'
                    style={{
                      fill: "none",
                      stroke: "ButtonFace",
                      strokeWidth: "20px",
                    }}
                  ></path>
                </svg>
                <span className='home__scroll-name'>Scroll down</span>
                <i className='uil uil-arrow-down home__scroll-arrow'></i>
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

// <div>
//   <Particles
//     params={{
//       particles: {
//         number: {
//           value: 80,
//           density: {
//             enable: true,
//             value_area: 1000,
//           },
//         },
//         collisions: {
//           enable: true,
//           bounce: true,
//           mode: "bounce",
//         },
//         color: {
//           value: "#2666CF",
//         },
//       },
//       line_linked: {
//         shadow: {
//           enable: true,
//           color: "#ffd369",
//           blur: 50,
//           offset: {
//             x: 0,
//             y: 0,
//           },
//         },
//       },

//       interactivity: {
//         events: {
//           onhover: {
//             enable: true,
//             mode: "repulse",
//           },
//         },
//       },
//     }}
//   />
//   <div className="main">
//     <section className="header-bg align-items-center d-flex">
//       <div className="container">
//         <div className="row align-items-center ">
//           <div className="col-md-4 ">
//             <div className="header-title">
//               <p className=" text-uppercase header-small-title title ">
//                 Hello!
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   {" "}
//                   👋🏻{" "}
//                 </span>
//               </p>
//               <h1 className="font-weight-bold main-title mb-4">
//                 Welcome to my portfolio
//               </h1>
//               <Link to="/projects">
//                 <button className="button">
//                   Explore
//                   <HiOutlineArrowNarrowRight className="ml-2" />
//                 </button>
//               </Link>
//             </div>
//           </div>
//           <div className="col-md-6 ">
//             <div>
//               <img src={code} alt="code" className="image" />
//             </div>
//           </div>
//           <div className="col-lg-12 mt-3 mb-3  ">
//             <div>
//               <div className="mouse_scroll" onClick={executeScroll}>
//                 <div>
//                   <span className="m_scroll_arrows one"></span>
//                   <span className="m_scroll_arrows two"></span>
//                   <span className="m_scroll_arrows three"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <span ref={myRef}></span>
//   </div>
//   <HomePage />
// </div>
