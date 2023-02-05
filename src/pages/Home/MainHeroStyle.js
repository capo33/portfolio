// import styled from "styled-components";

// export const InfoSec = styled.div`
//   color: #fff;
//   padding: 160px 0;
//   /* background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")}; */
//   background: ${({ lightBg }) => (lightBg ? "#191919" : "#F7F7F7")};

//   @media screen and (max-width: 425px) {
//     padding: 50% 0;
//   }
// `;

// export const Container = styled.div`
//   z-index: 1;
//   width: 100%;
//   height: 100%;
//   max-width: 1200px;
//   margin-right: auto;
//   margin-left: auto;
//   padding-right: 50px;
//   padding-left: 50px;

//   @media screen and (max-width: 991px) {
//     padding-right: 30px;
//     padding-left: 30px;
//   }
// `;

// export const InfoRow = styled.div`
//   display: flex;
//   margin: 0 -15px -15px -15px;
//   align-items: center;
//   flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

//   @media screen and (max-width: 425px) {
//     flex-direction: column;
//     flex-wrap: wrap;
//     margin: 0;
//   }
// `;

// export const InfoColumn = styled.div`
//   margin-bottom: 15px;
//   padding-right: 15px;
//   padding-left: 15px;
//   flex: 1;
//   max-width: 50%;
//   flex-basis: 60%;
//   @media screen and (max-width: 768px) {
//     max-width: 100%;
//     flex-basis: 100%;
//     display: flex;
//     justify-content: center;
//   }
// `;

// export const TextWrapper = styled.div`
//   max-width: 540px;
//   padding-top: 0;
//   padding-bottom: 60px;
//   @media screen and (max-width: 768px) {
//     padding-bottom: 65px;
//   }
// `;

// export const ImgWrapper = styled.div`
//   max-width: 555px;
//   display: flex;
//   justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
// `;

// export const TopLine = styled.div`
//   font-size: 2rem;
//   line-height: 16px;
//   letter-spacing: 1.4px;
//   margin-bottom: 16px;
// `;

// export const Span = styled.span`
//   animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
//   animation-duration: 2.5s; /* Change to speed up or slow down */
//   animation-iteration-count: infinite; /* Never stop waving :) */
//   transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
//   display: inline-block;

//   @keyframes wave-animation {
//     0% {
//       transform: rotate(0deg);
//     }
//     10% {
//       transform: rotate(14deg);
//     } /* The following five values can be played with to make the waving more or less extreme */
//     20% {
//       transform: rotate(-8deg);
//     }
//     30% {
//       transform: rotate(14deg);
//     }
//     40% {
//       transform: rotate(-4deg);
//     }
//     50% {
//       transform: rotate(10deg);
//     }
//     60% {
//       transform: rotate(0deg);
//     } /* Reset for the last half to pause */
//     100% {
//       transform: rotate(0deg);
//     }
//   }
// `;

// export const Img = styled.img`
//   padding-right: 0;
//   border: 0;
//   max-width: 100%;
//   vertical-align: middle;
//   display: inline-block;
//   max-height: 500px;
//   @media screen and (max-width: 425px) {
//     display: none;
//   }
// `;

// export const Heading = styled.h1`
//   margin-bottom: 24px;
//   font-size: 3rem;
//   line-height: 1.1;
//   font-weight: 600;
//   color: ${({ lightText }) => (lightText ? "#F5F2E7" : "#2C3333")};

//   @media screen and (max-width: 425px) {
//     font-size: 2.5rem;
//   }
// `;

// export const Arrow = styled.div`
// padding: 0 50% ;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   color: white;
//   width: 40px;
//   height: 40px;
// `;
// export const Bounce = styled.span`
//   -moz-animation: bounce 2s infinite;
//   -webkit-animation: bounce 2s infinite;
//   animation: bounce 2s infinite;

//   @keyframes bounce {
//     0%,
//     20%,
//     50%,
//     80%,
//     100% {
//       -moz-transform: translateY(0);
//       -ms-transform: translateY(0);
//       -webkit-transform: translateY(0);
//       transform: translateY(0);
//     }
//     40% {
//       -moz-transform: translateY(-30px);
//       -ms-transform: translateY(-30px);
//       -webkit-transform: translateY(-30px);
//       transform: translateY(-30px);
//     }
//     60% {
//       -moz-transform: translateY(-15px);
//       -ms-transform: translateY(-15px);
//       -webkit-transform: translateY(-15px);
//       transform: translateY(-15px);
//     }
//   }
// `;
// export const Button = styled.button`
//   border-radius: 4px;
//   /* background: ${({ primary }) => (primary ? "#2666CF" : "#2C3333")}; */
//   background: ${({ primary }) => (primary ? "#ffd523" : "#191919")};
//   /* background: ${({ primary }) => (primary ? "#222831" : "#ffd369")}; */
//   white-space: nowrap;
//   padding: ${({ big }) => (big ? "12px 64px" : "10px")};
//   color: ${({ fColor }) => (fColor ? "#ffd523" : "#191919")};
//   font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
//   outline: none;
//   border: 1px solid #191919;
//   cursor: pointer;

//   &:hover {
//     background: ${({ primary }) => (primary ? "#191919" : "#ffd523")};
//     color: ${({ fColor }) => (fColor ? "#191919" : "#ffd523")};
//     border: 1px solid #ffd523;

//     transition: all 0.3s ease-out;
//   }

//   @media screen and (max-width: 991px) {
//     width: 100%;
//   }
// `;
