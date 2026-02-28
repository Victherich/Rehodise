import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import cta from '../Images/cta.jpeg'

const CallToCollaborate = () => {
  return (
    <Section>
      <Container>
        <Grid>
          <Fade direction="left" triggerOnce>
            <Left>
              <SmallTitle>Partner With Us</SmallTitle>
              <Title>Let’s Build Sustainable Communities Together</Title>
              <Text>
                Whether you are a government agency, NGO, investor, or community leader, we are ready to collaborate and deliver impactful projects that advance renewable energy and smart agriculture.
              </Text>
              <Buttons>
                <PrimaryBtn>Get in Touch</PrimaryBtn>
                <SecondaryBtn>Learn More</SecondaryBtn>
              </Buttons>
            </Left>
          </Fade>

          <Fade direction="right" triggerOnce>
            <Right>
              {/* <Image src="https://images.unsplash.com/photo-1600180758895-7b5df20b6f5f?auto=format&fit=crop&w=800&q=80" alt="Collaboration" /> */}
            </Right>
          </Fade>
        </Grid>
      </Container>
    </Section>
  );
};

export default CallToCollaborate;

/* ================= STYLES ================= */

const Section = styled.section`
//   background: #1b67a8;
  background-image:url(${cta});
  color: #fff;
  padding: 100px 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  justify-content: center;
`;

const SmallTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  color:white; /* red accent */
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 30px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.button`
  padding: 14px 28px;
  background: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e03e3e;
    transform: translateY(-3px);
  }
`;

const SecondaryBtn = styled.button`
  padding: 14px 28px;
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #1b67a8;
  }
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
`;