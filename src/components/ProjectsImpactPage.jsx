import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import pr from '../Images/pr.png'
import pr1 from '../Images/pr1.png'
import pr2 from '../Images/pr2.png'
import pr4 from '../Images/pr4.png'
import { useNavigate } from "react-router-dom";

// HERO IMAGE
const heroImage =
  pr
// STATS DATA
const stats = [
  { number: "25+", label: "Communities Electrified" },
  { number: "5,000+", label: "Farms Supported" },
  { number: "3,200+", label: "Jobs Created" },
  { number: "18,000+", label: "Tons of CO₂ Reduced" },
];

// PROJECTS DATA
const projects = [
  {
    title: "Community Electrification",
    desc: "Deployment of solar mini-grids and off-grid systems to power rural communities, enabling access to clean, reliable energy for homes, farms and local enterprises.",
    image:
      pr1},
  {
    title: "Farming Productivity Improvement",
    desc: "Introduction of mechanized farming systems, irrigation technologies and climate-smart practices to increase crop yield, reduce labor and enhance food security.",
    image:
     pr2  },
  {
    title: "Job Creation Initiatives",
    desc: "Development of agro-processing hubs and renewable energy systems that create employment opportunities across farming, logistics, processing and technical services.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Climate Mitigation Projects",
    desc: "Integration of renewable energy and sustainable agriculture to reduce carbon emissions, promote environmental stewardship and support long-term climate resilience.",
    image:
     pr4 },
];

const ProjectsImpactPage = () => {
    const navigate = useNavigate();
  return (
    <Page>

      {/* HERO */}
      <Hero style={{ backgroundImage: `url(${heroImage})` }}>
        <Overlay />
        <HeroContent>
          <Fade direction="up" triggerOnce={false}>
            <h1>Projects & Impact</h1>
            <p>
              Delivering measurable results through energy, agriculture and sustainable development initiatives.
            </p>
          </Fade>
        </HeroContent>
      </Hero>

      {/* INTRO */}
      <Intro>
        <Fade triggerOnce={false}>
          <p>
            Our projects are designed to create lasting impact by addressing critical challenges across energy access,
            food production, employment and environmental sustainability. We focus on delivering measurable outcomes
            that improve livelihoods while supporting long-term economic and ecological resilience.
          </p>
        </Fade>
      </Intro>

      {/* STATS */}
      <StatsSection>
        {stats.map((stat, i) => (
          <StatCard key={i}>
            <Fade triggerOnce={false}>
              <h2>{stat.number}</h2>
              <p>{stat.label}</p>
            </Fade>
          </StatCard>
        ))}
      </StatsSection>

      {/* PROJECTS SHOWCASE */}
      <ProjectsSection>
        {projects.map((project, i) => (
          <ProjectRow key={i} reverse={i % 2 !== 0}>
            <Image style={{ backgroundImage: `url(${project.image})` }} />
            <Content>
              <Fade direction="up" triggerOnce={false}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </Fade>
            </Content>
          </ProjectRow>
        ))}
      </ProjectsSection>

      {/* IMPACT PILLARS */}
      <ImpactGrid>
        <Fade triggerOnce={false}>
          <ImpactCard>
            <h4>Poverty Reduction</h4>
            <p>
              Empowering communities through job creation, improved productivity and increased income opportunities.
            </p>
          </ImpactCard>

          <ImpactCard>
            <h4>Food Security</h4>
            <p>
              Supporting sustainable farming systems that increase food availability and reduce post-harvest losses.
            </p>
          </ImpactCard>

          <ImpactCard>
            <h4>Clean Energy Access</h4>
            <p>
              Expanding access to reliable renewable energy for households, farms and rural enterprises.
            </p>
          </ImpactCard>

          <ImpactCard>
            <h4>Climate Action</h4>
            <p>
              Reducing emissions and promoting environmentally responsible agricultural and energy practices.
            </p>
          </ImpactCard>
        </Fade>
      </ImpactGrid>

      {/* CTA */}
      <CTASection>
        <Fade triggerOnce={false}>
          <h2>Let’s Build Impact Together</h2>
          <p>
            Partner with us to implement projects that transform communities and create measurable outcomes.
          </p>
          <button onClick={()=>navigate('/contact')}>Start a Project</button>
        </Fade>
      </CTASection>

    </Page>
  );
};

export default ProjectsImpactPage;

/* ================= STYLES ================= */

const Page = styled.div`
//   font-family: Arial, sans-serif;
`;

/* HERO */
const Hero = styled.section`
  height: 75vh;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(27, 103, 168, 0.85),
    rgba(0, 0, 0, 0.6),
    rgba(180, 30, 30, 0.25)
  );
`;

const HeroContent = styled.div`
  position: relative;
  color: #fff;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  max-width: 800px;
  margin: auto;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }
`;

/* INTRO */
const Intro = styled.section`
  max-width: 900px;
  margin: 60px auto;
  text-align: center;
  padding: 0 20px;

  p {
    font-size: 18px;
    line-height: 1.7;
    color: #555;
  }
`;

/* STATS */
const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background: #1b67a8;
  color: #fff;
`;

const StatCard = styled.div`
  padding: 40px;
  text-align: center;

  h2 {
    font-size: 36px;
  }
`;

/* PROJECTS */
const ProjectsSection = styled.section`
  max-width: 1200px;
  margin: 80px auto;
`;

const ProjectRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media(max-width:768px){
    flex-direction:column;
  }

`;

const Image = styled.div`
  flex: 1;
  min-height: 300px;
  background-size: cover;
`;

const Content = styled.div`
  flex: 1;
  padding: 40px;

  h3 {
    color: #1b67a8;
    margin-bottom: 15px;
  }
`;

/* IMPACT GRID */
const ImpactGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  padding: 60px 20px;
  background: #f5f9fc;
`;

const ImpactCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 15px;

  h4{
  color:#1b67a8;
  }
`;

/* CTA */
const CTASection = styled.section`
  background: #1b67a8;
  color: #fff;
  text-align: center;
  padding: 80px 20px;

  button {
    margin-top: 20px;
    padding: 14px 30px;
    border: none;
    background: #ff4d4d;
    color: #fff;
    border-radius: 30px;
    cursor: pointer;
  }
`;