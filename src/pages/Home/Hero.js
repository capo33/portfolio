import React from "react";
import { Link } from "react-router-dom";
import { RiMessage2Line } from "react-icons/ri";
import {
  InfoSec,
  Container,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Button,
  ImgWrapper,
  Img,
} from "./HeroStyle";

function Hero({
  fColor,
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/contact'>
                  <Button big fontBig primary={primary} fColor={fColor}>
                    {buttonLabel} <RiMessage2Line />
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default Hero;
