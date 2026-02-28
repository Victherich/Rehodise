import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaSolarPanel, FaSeedling, FaTools } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <Section>
      <Container>
        <Fade direction="up" triggerOnce>
          <Header>
            <SmallTitle>Our Expertise</SmallTitle>
            <MainTitle>What We Do</MainTitle>
            <Description>
              We deliver integrated solutions across renewable energy,
              agriculture and engineering to support sustainable development
              and economic growth.
            </Description>
          </Header>
        </Fade>

        <Cards>
          <Fade cascade damping={0.2} triggerOnce>
            <Card>
              <IconWrapper>
                <FaSolarPanel />
              </IconWrapper>
              <CardTitle>Renewable Energy</CardTitle>
              <CardText>
                We deploy solar, mini-grid and off-grid energy systems to power
                homes, farms and agro-processing operations efficiently and sustainably.
              </CardText>
            </Card>

            <Card>
              <IconWrapper>
                <FaSeedling />
              </IconWrapper>
              <CardTitle>Smart Agriculture</CardTitle>
              <CardText>
                We implement climate-smart farming, mechanization and agribusiness
                solutions that improve productivity and food security.
              </CardText>
            </Card>

            <Card>
              <IconWrapper>
                <FaTools />
              </IconWrapper>
              <CardTitle>Engineering Services</CardTitle>
              <CardText>
                We provide project design, environmental assessments and technical
                supervision to ensure efficient and sustainable infrastructure development.
              </CardText>
            </Card>
          </Fade>
        </Cards>
      </Container>
    </Section>
  );
};

export default WhatWeDo;

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
  max-width: 700px;
  margin: 0 auto 60px;
`;

const SmallTitle = styled.p`
  color: #1b67a8;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const MainTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.6;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: #1b67a8;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  font-size: 15px;
  color: #666;
  line-height: 1.6;
`;