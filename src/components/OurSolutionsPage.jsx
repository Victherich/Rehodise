import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

// ================= HERO IMAGE =================
const heroImage = "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1600&q=80";

// ================= SOLUTIONS DATA =================
const solutions = [
  {
    title: "Renewable Energy Systems",
    items: [
      "Solar mini-grid & off-grid electrification",
      "Wind & small hydro solutions",
      "Agro-processing energy systems",
      "Smart energy monitoring",
      "Productive use of energy projects",
    ],
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Smart Agriculture & Agribusiness",
    items: [
      "Mechanized farming systems",
      "Poultry & livestock",
      "Agro-processing",
      "Climate-smart farming",
      "Export & trading support",
    ],
    image: "https://images.unsplash.com/photo-1560439516-2eeef204a9b0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Engineering & Environmental Services",
    items: [
      "Environmental impact assessment",
      "Social impact compliance",
      "Project implementation supervision",
      "Infrastructure support",
    ],
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Equipment, Logistics & Consulting",
    items: [
      "Machinery supply",
      "Agricultural consultancy",
      "AI monitoring & inspection",
      "Project financing facilitation",
    ],
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
];

const OurSolutionsPage = () => {
  return (
    <PageContainer>
      {/* HERO SECTION */}
      <HeroSection style={{ backgroundImage: `url(${heroImage})` }}>
        <HeroOverlay />
        <HeroContent>
          <Fade direction="up" triggerOnce>
            <HeroSubtitle>Our Solutions</HeroSubtitle>
            <HeroTitle>Innovative Energy & Agricultural Solutions for Sustainable Communities</HeroTitle>
          </Fade>
        </HeroContent>
      </HeroSection>

      {/* SOLUTIONS DIVISIONS */}
      <SolutionsSection>
        {solutions.map((section, idx) => (
          <SolutionCard key={idx}>
            <SolutionImage style={{ backgroundImage: `url(${section.image})` }} />
            <Fade direction="up" triggerOnce>
              <SolutionTitle>{section.title}</SolutionTitle>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Fade>
          </SolutionCard>
        ))}
      </SolutionsSection>
    </PageContainer>
  );
};

export default OurSolutionsPage;

/* ================= STYLES ================= */
const PageContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
`;

/* ---------------- HERO ---------------- */
const HeroSection = styled.section`
  height: 80vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(27, 103, 168, 0.85),
    rgba(0, 0, 0, 0.5),
    rgba(180, 30, 30, 0.25)
  );
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  color: #fff;
  max-width: 900px;
  padding: 0 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  color: #cfe8ff;
`;

const HeroTitle = styled.h1`
  font-size: 42px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

/* ---------------- SOLUTIONS ---------------- */
const SolutionsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
`;

const SolutionCard = styled.div`
  background: #f9fbfd;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }

  ul {
    margin-top: 15px;
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
    line-height: 1.5;
  }
`;

const SolutionImage = styled.div`
  height: 180px;
  background-size: cover;
  background-position: center;
`;

const SolutionTitle = styled.h3`
  font-size: 22px;
  margin: 15px 0;
  color: #1b67a8;
`;