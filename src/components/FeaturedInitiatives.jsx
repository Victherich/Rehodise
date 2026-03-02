import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import f1 from '../Images/f1.png'
import f2 from '../Images/f2.png'
import f3 from '../Images/f3.png'
import f4 from '../Images/f4.png'

const initiatives = [
  {
    title: "Solar-Powered Farms",
    description:
      "Deploying solar systems to power irrigation, cold storage, and farm operations efficiently.",
    image:
      f1, // solar panels + farm
  },
  {
    title: "Smart Greenhouses",
    description:
      "Modern greenhouse solutions that increase crop yield and reduce water usage.",
    image:
      f2, // greenhouse
  },
  {
    title: "Precision Agriculture",
    description:
      "Using drones, sensors, and analytics to optimize farm productivity and sustainability.",
    image:
      f3, // drone over field
  },
  {
    title: "Climate-Smart Irrigation",
    description:
      "Efficient irrigation systems that conserve water and improve crop resilience.",
    image:
     f4, // irrigation
  },
];

const FeaturedInitiatives = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % initiatives.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <Container>
        <Header>
          <SmallTitle>Our Initiatives</SmallTitle>
          <MainTitle>Featured Initiatives</MainTitle>
        </Header>

        <Slider>
          {initiatives.map((item, i) => (
            <Slide
              key={i}
              className={i === current ? "active" : ""}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <Overlay />
              <SlideContent>
                <Fade direction="up" triggerOnce={false}>
                  <SlideTitle>{item.title}</SlideTitle>
                  <SlideText>{item.description}</SlideText>
                </Fade>
              </SlideContent>
            </Slide>
          ))}
        </Slider>
      </Container>
    </Section>
  );
};

export default FeaturedInitiatives;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 100px 20px;
  background: #f9fbfd;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SmallTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  color: #1b67a8;
  margin-bottom: 10px;
`;

const MainTitle = styled.h2`
  font-size: 36px;
  color: #1b67a8;
`;

const Slider = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 20px;
`;

const Slide = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(1.05);
  transition: opacity 1.5s ease-in-out, transform 6s ease-in-out;

  &.active {
    opacity: 1;
    transform: scale(1);
    z-index: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(27, 103, 168, 0.85),
    rgba(0, 0, 0, 0.5),
    rgba(180, 30, 30, 0.25)
  );
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 2;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  max-width: 600px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 20px;
    max-width: 100%;
  }
`;

const SlideTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 15px;
`;

const SlideText = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;