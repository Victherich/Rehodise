import React from "react";
import styled from "styled-components";
import g7 from "../Images/g7.jpeg";
import g8 from "../Images/g8.jpeg";

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Image = styled.img`
  width: 100%;
//   height: 280px;
//   object-fit: cover;
  display: block;
`;

const Content = styled.div`
  padding: 25px;
`;

const Text = styled.p`
  font-size: 15px;
  font-weight:bold;
  line-height: 1.6;
//   color: #555;
   color: #1b67a8;
  text-align:center;
`;

/* ================= COMPONENT ================= */

const ShowcaseSection = () => {
  return (
    <Section>
      <Container>

        <Header>
          <SmallTitle>Highlights</SmallTitle>
          <MainTitle>Project Highlights</MainTitle>
        </Header>

        <Grid>

          <Card>
            <Image src={g7} alt="Biogas Demonstration Plant" />
            <Content>
              <Text>
                Biogas Demonstration plant at Government College Afikpo through UK ISPF project 2024/2025.
              </Text>
            </Content>
          </Card>

          <Card>
            <Image src={g8} alt="Rice Husk Biomass Energy Evaluation" />
            <Content>
              <Text>
                Evaluation of Modified Rice Husk Pellets for Biomass Energy Production.
              </Text>
            </Content>
          </Card>

        </Grid>

      </Container>
    </Section>
  );
};

export default ShowcaseSection;