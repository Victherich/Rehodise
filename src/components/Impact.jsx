import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const Impact = () => {
  return (
    <Section>
      <Container>
        <Grid>
          {/* LEFT SIDE */}
          <Fade direction="left" triggerOnce>
            <Left>
              <SmallTitle>Our Impact</SmallTitle>
              <Title>
                Driving Change Through Sustainable Energy and Agriculture
              </Title>
              <Text>
                Our work is focused on creating real, measurable impact by
                addressing some of the most pressing challenges facing
                communities today. From reducing poverty to advancing climate
                action, we deliver solutions that improve lives and protect the environment.
              </Text>
            </Left>
          </Fade>

          {/* RIGHT SIDE */}
          <Right>
            <Fade cascade damping={0.2} triggerOnce>
              <ImpactItem>
                <Number>01</Number>
                <Content>
                  <ItemTitle>Poverty Reduction</ItemTitle>
                  <ItemText>
                    We create jobs, empower farmers and support local economies
                    through energy access and improved agricultural productivity.
                  </ItemText>
                </Content>
              </ImpactItem>

              <ImpactItem>
                <Number>02</Number>
                <Content>
                  <ItemTitle>Climate Action</ItemTitle>
                  <ItemText>
                    We promote clean energy adoption and climate-smart farming
                    practices that reduce emissions and protect natural resources.
                  </ItemText>
                </Content>
              </ImpactItem>

              <ImpactItem>
                <Number>03</Number>
                <Content>
                  <ItemTitle>Food Security</ItemTitle>
                  <ItemText>
                    By improving agricultural systems, we help increase food
                    production and ensure reliable access to nutritious food.
                  </ItemText>
                </Content>
              </ImpactItem>
            </Fade>
          </Right>
        </Grid>
      </Container>
    </Section>
  );
};

export default Impact;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 100px 20px;
  background: linear-gradient(
    120deg,
    #1b67a8 0%,
    #0d1b2a 60%,
    #3a0d0d 100%
  );
  color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div``;

const SmallTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  color: #aad4ff;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  font-size: 38px;
  line-height: 1.3;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #e0e0e0;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ImpactItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

const Number = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #ff4d4d; /* subtle red accent */
  min-width: 40px;
`;

const Content = styled.div``;

const ItemTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const ItemText = styled.p`
  font-size: 15px;
  color: #d0d0d0;
  line-height: 1.6;
`;