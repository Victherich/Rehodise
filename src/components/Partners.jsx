import React, { useState, useEffect } from "react";
import styled from "styled-components";

const partners = [
  {
    name: "FAO",
    logo: "https://cdn-icons-png.flaticon.com/512/196/196565.png", // flat style FAO-inspired icon
  },

  {
    name: "World Bank",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png", // new flat-style World Bank / globe icon
  },
  {
    name: "Local Government",
    logo: "https://cdn-icons-png.flaticon.com/512/1035/1035687.png", // flat government/building icon
  },
  {
    name: "Private Agribusiness",
    logo: "https://cdn-icons-png.flaticon.com/512/2910/2910760.png", // flat farm/agribusiness icon
  },
];

const Partners = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % partners.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <Container>
        <Header>
          <SmallTitle>Collaborations</SmallTitle>
          <MainTitle>Our Partners & Stakeholders</MainTitle>
        </Header>

        <Carousel>
          {partners.map((partner, i) => {
            const position = (i - offset + partners.length) % partners.length;
            return (
              <LogoWrapper key={i} position={position}>
                <Logo src={partner.logo} alt={partner.name} />
              </LogoWrapper>
            );
          })}
        </Carousel>
      </Container>
    </Section>
  );
};

export default Partners;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 80px 20px;
  background: #f0f6fb;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 50px;
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

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  gap: 40px;
  flex-wrap: nowrap;
`;

const LogoWrapper = styled.div`
  flex: 0 0 120px;
  opacity: ${(props) => (props.position === 0 ? 1 : 0.4)};
  transform: scale(${(props) => (props.position === 0 ? 1 : 0.8)});
  transition: all 0.5s ease;
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 80px;
  filter: brightness(0) invert(0.2);
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0) invert(1);
    transform: scale(1.1);
  }
`;