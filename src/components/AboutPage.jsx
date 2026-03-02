// import React from "react";
// import styled from "styled-components";
// import { Fade } from "react-awesome-reveal";

// // HERO IMAGE
// const heroImage =
//   "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80";

// const AboutPage = () => {
//   return (
//     <Page>

//       {/* HERO */}
//       <Hero style={{ backgroundImage: `url(${heroImage})` }}>
//         <Overlay />
//         <HeroContent>
//           <Fade direction="up" triggerOnce={false}>
//             <h1>About Us</h1>
//             <p>
//               Building sustainable communities through renewable energy and smart agriculture.
//             </p>
//           </Fade>
//         </HeroContent>
//       </Hero>

//       {/* COMPANY OVERVIEW */}
//       <Section>
//         <Container>
//           <Fade direction="up" triggerOnce={false}>
//             <h2>Company Overview</h2>
//             <p>
//               Rehoboth Dunkemo Integrated Services and Energy Ltd. is an integrated development
//               and technology company committed to strengthening communities through renewable
//               energy systems and climate-smart agricultural solutions.
//             </p>

//             <p>
//               Our work combines clean energy technologies, modern agricultural practices,
//               engineering expertise and collaborative partnerships to address critical challenges
//               including energy access, food security, job creation and environmental sustainability.
//             </p>

//             <p>
//               Operating at the intersection of energy and agriculture, we support communities,
//               institutions and enterprises with systems that power farms, enable agro-processing,
//               improve productivity and reduce dependence on fossil fuels.
//             </p>
//           </Fade>
//         </Container>
//       </Section>

//       {/* MISSION & VISION */}
//       <SplitSection>
//         <Box>
//           <Fade triggerOnce={false}>
//             <h3>Our Mission</h3>
//             <ul>
//               <li>Expand access to clean and reliable energy</li>
//               <li>Improve food production and agro-business productivity</li>
//               <li>Create employment and livelihood opportunities</li>
//               <li>Promote climate-responsible practices</li>
//               <li>Strengthen community participation and local capacity</li>
//             </ul>
//           </Fade>
//         </Box>

//         <Box dark>
//           <Fade triggerOnce={false}>
//             <h3>Our Vision</h3>
//             <p>
//               To transform communities by enabling access to innovative renewable energy and
//               sustainable agricultural solutions that drive prosperity, resilience and
//               environmental stewardship.
//             </p>
//           </Fade>
//         </Box>
//       </SplitSection>

//       {/* CORE VALUES */}
//       <ValuesSection>
//         <Fade triggerOnce={false}>
//           <h2>Core Values</h2>
//         </Fade>

//         <ValuesGrid>
//           <ValueCard>
//             <h4>Sustainability</h4>
//             <p>Long-term environmental and social responsibility.</p>
//           </ValueCard>

//           <ValueCard>
//             <h4>Innovation</h4>
//             <p>Application of modern technologies and smart systems.</p>
//           </ValueCard>

//           <ValueCard>
//             <h4>Integrity</h4>
//             <p>Transparency and accountability in all engagements.</p>
//           </ValueCard>

//           <ValueCard>
//             <h4>Collaboration</h4>
//             <p>Working with partners and communities for shared success.</p>
//           </ValueCard>

//           <ValueCard>
//             <h4>Impact</h4>
//             <p>Delivering measurable improvements in livelihoods and development.</p>
//           </ValueCard>
//         </ValuesGrid>
//       </ValuesSection>

//       {/* OUR APPROACH */}
//       <ApproachSection>
//         <Fade triggerOnce={false}>
//           <h2>Our Approach</h2>
//         </Fade>

//         <Timeline>
//           <Step>
//             <span>01</span>
//             <div>
//               <h4>Assess Community Needs</h4>
//               <p>Identify energy and agricultural challenges within communities.</p>
//             </div>
//           </Step>

//           <Step>
//             <span>02</span>
//             <div>
//               <h4>Design Practical Solutions</h4>
//               <p>Integrate modern technology with local realities.</p>
//             </div>
//           </Step>

//           <Step>
//             <span>03</span>
//             <div>
//               <h4>Implement Sustainably</h4>
//               <p>Ensure environmental and social responsibility.</p>
//             </div>
//           </Step>

//           <Step>
//             <span>04</span>
//             <div>
//               <h4>Build Local Capacity</h4>
//               <p>Train communities for long-term sustainability.</p>
//             </div>
//           </Step>

//           <Step>
//             <span>05</span>
//             <div>
//               <h4>Measure Impact</h4>
//               <p>Track economic, social and environmental outcomes.</p>
//             </div>
//           </Step>
//         </Timeline>
//       </ApproachSection>

//       {/* CTA */}
//       <CTA>
//         <Fade triggerOnce={false}>
//           <h2>Let’s Work Together</h2>
//           <p>
//             We collaborate with governments, investors, and communities to deliver impactful and
//             sustainable development projects.
//           </p>
//           <button>Partner With Us</button>
//         </Fade>
//       </CTA>

//     </Page>
//   );
// };

// export default AboutPage;

// /* ================= STYLES ================= */

// const Page = styled.div`
//   font-family: Arial, sans-serif;
//   h2{
//   color:#1b67a8;
//   }
//   h4{
//     color:#1b67a8;
//   }
// `;

// /* HERO */
// const Hero = styled.section`
//   height: 70vh;
//   background-size: cover;
//   background-position: center;
//   position: relative;
// `;

// const Overlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background: linear-gradient(
//     120deg,
//     rgba(27, 103, 168, 0.85),
//     rgba(0, 0, 0, 0.6),
//     rgba(180, 30, 30, 0.25)
//   );
// `;

// const HeroContent = styled.div`
//   position: relative;
//   text-align: center;
//   color: #fff;
//   top: 50%;
//   transform: translateY(-50%);
// `;

// /* GENERAL */
// const Section = styled.section`
//   padding: 80px 20px;
// `;

// const Container = styled.div`
//   max-width: 900px;
//   margin: auto;
// `;

// /* SPLIT */
// const SplitSection = styled.section`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const Box = styled.div`
//   flex: 1;
//   padding: 60px 30px;
//   background: ${({ dark }) => (dark ? "#1b67a8" : "#f5f9fc")};
//   color: ${({ dark }) => (dark ? "#fff" : "#333")};
// `;

// /* VALUES */
// const ValuesSection = styled.section`
//   padding: 80px 20px;
//   text-align: center;
// `;

// const ValuesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//   gap: 30px;
//   margin-top: 40px;
// `;

// const ValueCard = styled.div`
//   background: #fff;
//   padding: 30px;
//   border-radius: 15px;
// `;

// /* APPROACH */
// const ApproachSection = styled.section`
//   padding: 80px 20px;
//   background: #f5f9fc;
//   text-align: center;
// `;

// const Timeline = styled.div`
//   max-width: 800px;
//   margin: 40px auto;
// `;

// const Step = styled.div`
//   display: flex;
//   align-items: flex-start;
//   margin-bottom: 30px;

//   span {
//     font-size: 24px;
//     font-weight: bold;
//     color: #1b67a8;
//     margin-right: 20px;
//   }
// `;

// /* CTA */
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
//   }
// `;





import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

// HERO IMAGE
const heroImage =
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80";

const AboutPage = () => {
  return (
    <Page>

      {/* HERO */}
      <Hero style={{ backgroundImage: `url(${heroImage})`, backgroundPosition:"bottom" }}>
        <Overlay />
        <HeroContent>
          <Fade direction="up">
            <h1>About Us</h1>
            <p>Who we are, what we do, and the impact we create</p>
          </Fade>
        </HeroContent>
      </Hero>

      {/* INTRO */}
      <Section>
        <Container>
          <Fade direction="up">
            <TextBlock>
              Welcome to Rehoboth Dunkemo Integrated Services and Energy Ltd.

              We are an integrated development and technology company committed to strengthening communities through renewable energy systems and climate-smart agricultural solutions. By combining modern engineering, smart farming practices and collaborative partnerships, we support improved food production, energy access and sustainable livelihoods.

              Our focus is to deliver practical solutions that enhance productivity, promote environmental responsibility and create long-term economic value for communities, institutions and enterprises.

              Whether you are a government agency, development organization, agribusiness operator, investor or community partner, we are ready to work with you to implement impactful and sustainable projects.
            </TextBlock>
          </Fade>
        </Container>
      </Section>

      {/* ABOUT */}
      <Section alt>
        <Container>
          <Fade direction="up">
            <h2>ABOUT US</h2>
            <TextBlock>
              Rehoboth Dunkemo Integrated Services and Energy Ltd. is an integrated solutions and development company dedicated to advancing sustainable communities through the productive use of renewable energy and climate-smart agricultural systems.

              Our work combines clean energy technologies, modern agricultural practices, engineering expertise and collaborative partnerships to address critical development challenges including energy access, food security, job creation and environmental sustainability. We design and implement practical solutions that improve livelihoods while supporting long-term economic and ecological resilience.

              Operating at the intersection of energy and agriculture, we support communities, institutions and enterprises with systems that power farms, enable agro-processing, improve productivity and reduce dependence on fossil fuels. Our approach emphasizes local participation, knowledge transfer and capacity building to ensure that projects remain sustainable beyond implementation.

              We partner with government agencies, development organizations, private sector stakeholders and local communities to deliver impactful initiatives that promote inclusive growth and responsible resource management.
            </TextBlock>
          </Fade>
        </Container>
      </Section>

      {/* VISION & MISSION */}
      <Split>
        <Card>
          <Fade>
            <h3>OUR VISION</h3>
            <p>
              To transform communities by enabling access to innovative renewable energy and sustainable agricultural solutions that drive prosperity, resilience and environmental stewardship.
            </p>
          </Fade>
        </Card>

        <Card dark>
          <Fade>
            <h3>OUR MISSION</h3>
            <TextBlock>
              To support sustainable development by delivering integrated energy and agricultural solutions that:

               Expand access to clean and reliable energy
               Improve food production and agro-business productivity
               Create employment and livelihood opportunities
               Promote climate-responsible practices
               Strengthen community participation and local capacity
            </TextBlock>
          </Fade>
        </Card>
      </Split>

      {/* APPROACH */}
      <Section>
        <Container>
          <Fade>
            <h2>OUR APPROACH</h2>
            <TextBlock>
              We implement projects using a collaborative and impact-driven model:

              1. Assess Community Needs – Identify energy and agricultural challenges
              2. Design Practical Solutions – Integrate technology with local conditions
              3. Implement Sustainably – Ensure environmental and social responsibility
              4. Build Local Capacity – Train communities for long-term operation
              5. Measure Impact – Track social, economic and environmental outcomes
            </TextBlock>
          </Fade>
        </Container>
      </Section>

      {/* VALUES */}
      <Section alt>
        <Container>
          <Fade>
            <h2>CORE VALUES</h2>
            <Grid>
              <Value>Sustainability – Long-term environmental and social responsibility</Value>
              <Value>Innovation – Application of modern technologies and smart systems</Value>
              <Value>Integrity – Transparency and accountability in all engagements</Value>
              <Value>Collaboration – Working with partners and communities for shared success</Value>
              <Value>Impact – Delivering measurable improvements in livelihoods and development.</Value>
            </Grid>
          </Fade>
        </Container>
      </Section>

      {/* WHO WE ARE */}
      <Section>
        <Container>
          <Fade>
            <h2>WHO WE ARE</h2>
            <TextBlock>
              Rehoboth Dunkemo Integrated Services and Energy Ltd is an integrated development and technology company focused on transforming communities through productive use of renewable energy and sustainable agricultural systems.

              We collaborate with farmers, agribusiness operators, government institutions, development organizations and private sector partners to deploy practical solutions that improve food production, energy access, job creation and environmental sustainability.

              Our work connects energy, agriculture, engineering and innovation into one coordinated approach that supports economic growth and long-term community resilience.
            </TextBlock>
          </Fade>
        </Container>
      </Section>

      {/* WHAT WE DO */}
      <Section alt>
        <Container>
          <Fade>
            <h2>WHAT WE DO</h2>

            <TextBlock>
              Renewable Energy Solutions

              Deployment of solar, mini-grid, off-grid, wind and small hydro systems designed to power homes, farms, agro-processing and rural enterprises.
            </TextBlock>

            <TextBlock>
              Smart Agriculture & Agribusiness.

              Mechanized farming, Farm Animals and Farm Birds, agro-processing support and climate-smart agricultural practices that increase productivity and food availability.
            </TextBlock>

            <TextBlock>
              Engineering & Environmental Services

              Project design, environmental and social impact assessment, compliance support and implementation supervision for sustainable infrastructure projects.
            </TextBlock>

            <TextBlock>
              Equipment, Logistics & Technical Support

              Supply of agricultural machinery, consultancy services, inspection technologies and logistics support for agricultural and energy operations.
            </TextBlock>

          </Fade>
        </Container>
      </Section>

      {/* IMPACT */}
      <Section>
        <Container>
          <Fade>
            <h2>OUR IMPACT</h2>
            <TextBlock>
              Our programs are designed to support community prosperity through the productive use of energy and improved agricultural systems.

              We contribute to:

               Poverty reduction through job creation
               Increased food production and availability
               Access to clean and reliable energy
               Sustainable local economic development
               Climate change mitigation initiatives
            </TextBlock>
          </Fade>
        </Container>
      </Section>

      {/* SUSTAINABILITY */}
      <Section alt>
        <Container>
          <Fade>
            <h2>SUSTAINABILITY COMMITMENT</h2>
            <TextBlock>
              We integrate renewable energy and agriculture to reduce dependence on fossil fuels, support climate-smart production, and improve environmental outcomes.

              Our activities promote clean energy adoption, efficient resource use and responsible land management while empowering local communities to actively participate in development projects.
            </TextBlock>
          </Fade>
        </Container>
      </Section>

      {/* PARTNERSHIPS */}
      <Section>
        <Container>
          <Fade>
            <h2>PARTNERSHIPS</h2>
            <TextBlock>
              We work with public institutions, development organizations, investors, NGOs and private enterprises to design and implement sustainable projects that deliver measurable social and economic benefits.

              Interested in collaboration? We welcome partnerships that advance energy access, food security and community development.
            </TextBlock>
          </Fade>
        </Container>
      </Section>

    </Page>
  );
};

export default AboutPage;

/* STYLES */

const Page = styled.div`
//   font-family: Arial;
  h2{
 color: #1b67a8
  }
`;

const Hero = styled.section`
  height: 70vh;
  background-size: cover;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
`;

const HeroContent = styled.div`
  position: relative;
  color: #fff;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
`;

const Section = styled.section`
  padding: 80px 20px;
  background: ${({ alt }) => (alt ? "#f5f9fc" : "#fff")};
`;

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const TextBlock = styled.p`
  white-space: pre-line;
  line-height: 1.8;
  margin-top: 20px;
`;

const Split = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 1;
  padding: 60px;
  background: ${({ dark }) => (dark ? "#1b67a8" : "#fff")};
  color: ${({ dark }) => (dark ? "#fff" : "#333")};
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 30px;
`;

const Value = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
`;