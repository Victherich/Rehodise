import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

// HERO IMAGE
const heroImage =
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80";

const SustainabilityPage = () => {
  return (
    <Page>

      {/* HERO */}
      <Hero style={{ backgroundImage: `url(${heroImage})` }}>
        <Overlay />
        <HeroContent>
          <Fade direction="up">
            <h1>Sustainability & SDGs</h1>
            <p>Driving measurable impact through aligned global development goals</p>
          </Fade>
        </HeroContent>
      </Hero>

      {/* INTRO */}
      <Section>
        <Container>
          <Fade>
            <h2>Our Commitment to Sustainable Development</h2>
            <p>
              Sustainability is at the core of everything we do. Our projects are designed
              to deliver long-term environmental, economic and social value while aligning
              with global development priorities.
            </p>
            <p>
              We actively contribute to key Sustainable Development Goals (SDGs) by integrating
              renewable energy, climate-smart agriculture and community-driven development
              models into all our initiatives.
            </p>
          </Fade>
        </Container>
      </Section>

      {/* SDG GRID */}
      <Section alt>
        <Container>
          <Fade>
            <h2>SDG Alignment</h2>
          </Fade>

          <Grid>

            <Card>
              <h3>No Poverty</h3>
              <p>
                We create economic opportunities through job creation, access to energy,
                and improved agricultural productivity, helping communities increase income
                and reduce vulnerability.
              </p>
            </Card>

            <Card>
              <h3>Zero Hunger</h3>
              <p>
                Our climate-smart farming solutions improve food production, reduce post-harvest
                losses and support agribusiness development to ensure food security.
              </p>
            </Card>

            <Card>
              <h3>Clean Energy</h3>
              <p>
                We deploy solar, mini-grid and off-grid energy systems that provide reliable,
                affordable and sustainable power for homes, farms and enterprises.
              </p>
            </Card>

            <Card>
              <h3>Sustainable Communities</h3>
              <p>
                Our integrated approach strengthens rural and urban communities by enabling
                infrastructure, energy access and inclusive economic development.
              </p>
            </Card>

            <Card>
              <h3>Climate Action</h3>
              <p>
                We reduce carbon emissions through renewable energy adoption and promote
                environmentally responsible agricultural and land-use practices.
              </p>
            </Card>

          </Grid>
        </Container>
      </Section>

      {/* IMPACT EXPLANATION */}
      <Section>
        <Container>
          <Fade>
            <h2>How We Deliver Impact</h2>
          </Fade>

          <ImpactList>

            <ImpactItem>
              <h4>Integrated Energy & Agriculture</h4>
              <p>
                We connect clean energy systems with agricultural production to improve
                efficiency, reduce costs and increase productivity across value chains.
              </p>
            </ImpactItem>

            <ImpactItem>
              <h4>Community-Centered Development</h4>
              <p>
                Our projects are designed with local participation, ensuring that communities
                are actively involved and benefit directly from implementation.
              </p>
            </ImpactItem>

            <ImpactItem>
              <h4>Capacity Building</h4>
              <p>
                We train local stakeholders to manage and sustain systems, ensuring long-term
                project viability and knowledge transfer.
              </p>
            </ImpactItem>

            <ImpactItem>
              <h4>Environmental Responsibility</h4>
              <p>
                We prioritize low-carbon technologies, efficient resource use and sustainable
                land management practices in all operations.
              </p>
            </ImpactItem>

          </ImpactList>
        </Container>
      </Section>

      {/* CSR */}
      <Section alt>
        <Container>
          <Fade>
            <h2>Corporate Social Responsibility (CSR)</h2>
            <p>
              Beyond project implementation, we are committed to supporting communities through
              targeted social impact initiatives.
            </p>
          </Fade>

          <CSRGrid>

            <CSRCard>
              <h4>Community Empowerment</h4>
              <p>
                Supporting local entrepreneurship, youth engagement and women participation
                in energy and agriculture value chains.
              </p>
            </CSRCard>

            <CSRCard>
              <h4>Training & Education</h4>
              <p>
                Providing technical training, workshops and knowledge-sharing programs
                to build local capacity and skills.
              </p>
            </CSRCard>

            <CSRCard>
              <h4>Environmental Awareness</h4>
              <p>
                Promoting climate awareness, sustainable farming practices and responsible
                resource use within communities.
              </p>
            </CSRCard>

            <CSRCard>
              <h4>Rural Development Support</h4>
              <p>
                Contributing to initiatives that improve rural infrastructure, livelihoods
                and overall community wellbeing.
              </p>
            </CSRCard>

          </CSRGrid>
        </Container>
      </Section>

      {/* CLOSING */}
      {/* <CTA>
        <Fade>
          <h2>Building a Sustainable Future Together</h2>
          <p>
            We welcome partnerships with governments, development organizations, investors
            and communities to scale impact and accelerate sustainable development outcomes.
          </p>
          <button>Partner With Us</button>
        </Fade>
      </CTA> */}

    </Page>
  );
};

export default SustainabilityPage;

/* STYLES */

const Page = styled.div`
//   font-family: Arial, sans-serif;
  h2{
  color:#1b67a8;
  }
  h3{
  color:#1b67a8;
  }
`;

const Hero = styled.section`
  height: 70vh;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(27, 103, 168, 0.4),
    rgba(0, 0, 0, 0.4)
  );
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
`;

const Section = styled.section`
  padding: 80px 20px;
  background: ${({ alt }) => (alt ? "#f5f9fc" : "#fff")};
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const Card = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`;

const ImpactList = styled.div`
  margin-top: 40px;
`;

const ImpactItem = styled.div`
  margin-bottom: 30px;
`;

const CSRGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  margin-top: 40px;
`;

const CSRCard = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 12px;
`;

// const CTA = styled.section`
//   background: #1b67a8;
//   color: #fff;
//   text-align: center;
//   padding: 80px 20px;

//   button {
//     margin-top: 20px;
//     padding: 14px 30px;
//     border: none;
//     background: #ff4d4d;
//     color: #fff;
//     border-radius: 30px;
//     cursor: pointer;
//   }
// `;