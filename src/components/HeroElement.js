import styled, { keyframes } from "styled-components";

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 5rem;
  border: none;
  text-decoration: none;
  align-content: center;
  cursor: pointer;
  animation: ${ScrollAnimation} 2s linear 0s infinite;
  &:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  @media screen and (max-width: 425px) {
    justify-content: center;
    padding-top: 0;
    /* margin-top: 0; */
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;
  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;
