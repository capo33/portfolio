import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  /* background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")}; */
  background: ${({ lightBg }) => (lightBg ? "#2C3333" : "#F7F7F7")};
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#F5F2E7" : "#2C3333")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 2.5rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#F5F2E7" : "#2C3333")};
  @media screen and (max-width: 576px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  /* max-width: 440px; */
  margin-bottom: 35px;
  font-size: 1.2rem;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#F5F2E7" : "#2C3333")};

  @media screen and (max-width: 576px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  /* background: ${({ primary }) => (primary ? "#2666CF" : "#2C3333")}; */
  background: ${({ primary }) => (primary ? "#ffd523" : "#191919")};
  /* background: ${({ primary }) => (primary ? "#222831" : "#ffd369")}; */
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px")};
  color: ${({ fColor }) => (fColor ? "#ffd523" : "#191919")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ primary }) => (primary ? "#191919" : "#ffd523")};
    color: ${({ fColor }) => (fColor ? "#191919" : "#ffd523")};

    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 991px) {
    width: 50%;
  }
  @media screen and (max-width: 576px) {
    font-size: 18px;
    width: 100%;
  }
`;
