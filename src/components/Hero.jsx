import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";
import h1 from '../Images/h1.jpeg'
import h2 from '../Images/h2.jpeg'
import h3 from '../Images/h3.jpeg'
import h4 from '../Images/h4.jpeg'
import h5 from '../Images/h5.jpeg'
import { useNavigate } from "react-router-dom";

// const images = [
//   "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
//   "https://images.unsplash.com/photo-1560493676-04071c5f467b",
//   "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
//   "https://images.unsplash.com/photo-1471193945509-9ad0617afabf",
//   "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
// ];

// const images = [
//   "https://images.unsplash.com/photo-1592982537447-7440770cbfc9", // smart farming drone
//   "https://images.unsplash.com/photo-1586773860418-d37222d8fce3", // greenhouse tech
//   "https://images.unsplash.com/photo-1625246333195-78d9c38ad449", // precision agriculture
//   "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad", // irrigation farming
//   "https://images.unsplash.com/photo-1605000797499-95a51c5269ae", // tractor modern farming
// ];

const images = [h1,h2,h3,h4,h5]

const Hero = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      {/* Background Slider */}
      {images.map((img, i) => (
        <Background
          key={i}
          className={i === index ? "active" : ""}
          style={{
            backgroundImage: `url(${img}?auto=format&fit=crop&w=1600&q=80)`,
          }}
        />
      ))}

      <Overlay />

      {/* Content */}
      <Content>
        <Fade direction="up" triggerOnce>
          <Subtitle>
            Renewable Energy • Smart Agriculture • Sustainable Development
          </Subtitle>
        </Fade>

        <Slide direction="up" triggerOnce>
          <Title>
            Advancing Sustainable Communities Through Renewable Energy and Smart Agriculture
          </Title>
        </Slide>

        <Fade delay={300} triggerOnce>
          <Buttons>
            <PrimaryBtn onClick={()=>navigate('/contact')}>Get in Touch</PrimaryBtn>
            <SecondaryBtn onClick={()=>navigate('/solutions')}>Our Solutions</SecondaryBtn>
          </Buttons>
        </Fade>
      </Content>
    </HeroContainer>
  );
};

export default Hero;

/* ================= STYLES ================= */

const HeroContainer = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

/* Background Slides */
const Background = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;

  opacity: 0;
  transform: scale(1.1);
  transition: opacity 1.5s ease-in-out, transform 6s ease-in-out;

  &.active {
    opacity: 1;
    transform: scale(1);
    z-index: 0;
  }
`;

/* Overlay */
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  background: linear-gradient(
    120deg,
    rgba(27, 103, 168, 0.85),
    rgba(0, 0, 0, 0.7),
    rgba(180, 30, 30, 0.25)
  );
`;

/* Content */
const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  height: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: #fff;
  padding: 0 20px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #cfe8ff;
`;

const Title = styled.h1`
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.button`
  padding: 14px 28px;
  background: #1b67a8;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #145a96;
    transform: translateY(-3px);
  }
`;

const SecondaryBtn = styled.button`
  padding: 14px 28px;
  background: transparent;
  color: #fff;
  border: 2px solid #ffffffcc;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    color: #1b67a8;
  }
`;