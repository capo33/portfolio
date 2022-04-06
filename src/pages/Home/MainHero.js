import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import {
  InfoSec,
  Container,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Span,
  Heading,
  Arrow,
  Button,
  ImgWrapper,
  Img,
} from "./MainHeroStyle";

function MainHero({
  fColor,
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  headline,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
}) {
  const titleRef = useRef();

  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>
                  {topLine}
                  <Span role="img" aria-labelledby="wave">
                    👋🏻
                  </Span>
                </TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Link to="/contact">
                  <Button big fontBig primary={primary} fColor={fColor}>
                    {buttonLabel} <BsArrowRightShort />
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
          <Arrow>
            <div className="mouse_scroll" onClick={handleBackClick}>
              <div>
                <span className="m_scroll_arrows one"></span>
                <span className="m_scroll_arrows two"></span>
                <span className="m_scroll_arrows three"></span>
              </div>
            </div>
          </Arrow>
        </Container>
      </InfoSec>

      <span ref={titleRef}></span>
    </>
  );
}

export default MainHero;
