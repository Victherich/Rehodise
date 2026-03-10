import React from "react";
import styled from "styled-components";
import g1 from '../Images/g1.jpeg'
import g2 from '../Images/g2.jpeg'
import g3 from '../Images/g3.jpeg'
import g4 from '../Images/g4.jpeg'
import g5 from '../Images/g5.jpeg'
import g6 from '../Images/g6.jpeg'

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
  margin-bottom: 40px;
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

const Description = styled.p`
  max-width: 750px;
  margin: 20px auto 60px;
  text-align: center;
  font-size: 16px;
  line-height: 1.7;
  color: #555;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ImageCard = styled.div`
  overflow: hidden;
  border-radius: 16px;
  position: relative;
  height: 260px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(27, 103, 168, 0.4),
      rgba(0, 0, 0, 0.1),
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

/* ================= COMPONENT ================= */

const images = [
g1,g2,g3,g4,g5,g6
];

const GallerySection = () => {
  return (
    <Section>
      <Container>

        <Header>
          <SmallTitle>Gallery</SmallTitle>
          <MainTitle>Moments & Highlights</MainTitle>
        </Header>

        <Description>
         Stakeholders/community engagement in Biogas Project in partnership with ISPF, Newcastle University and Federal Polytechnic Unwan, Afikpo Nigeria.
        </Description>

        <GalleryGrid>
          {images.map((img, index) => (
            <ImageCard key={index}>
              <img src={img} alt="gallery" />
            </ImageCard>
          ))}
        </GalleryGrid>

      </Container>
    </Section>
  );
};

export default GallerySection;