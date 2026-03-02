import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import rs1 from '../Images/rs1.png';

/* HERO IMAGE */
const heroImage =
 rs1

const ResourcesPage = () => {
  return (
    <Page>

      {/* HERO */}
      <Hero style={{ backgroundImage: `url(${heroImage})` }}>
        <Overlay />
        <HeroContent>
          <Fade direction="up">
            <h1>Resources & Insights</h1>
            <p>
              Knowledge, ideas and innovations shaping sustainable energy and agriculture
            </p>
          </Fade>
        </HeroContent>
      </Hero>

      {/* FEATURED ARTICLE */}
      <Featured>
        <Fade>
          <FeaturedGrid>
            <FeaturedImage src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800&q=80" />
            <FeaturedText>
              <Tag>Featured Insight</Tag>
              <h2>Powering Agriculture with Renewable Energy</h2>
              <p>
                Discover how integrating solar-powered systems into agriculture is transforming
                productivity, reducing costs, and enabling sustainable food systems across
                rural communities.
              </p>
              <ReadMore>Read Article →</ReadMore>
            </FeaturedText>
          </FeaturedGrid>
        </Fade>
      </Featured>

      {/* CATEGORY FILTER (STATIC UI) */}
      <Categories>
        <Fade>
          {/* <CategoryList>
            <span>All</span>
            <span>Renewable Energy</span>
            <span>Smart Farming</span>
            <span>Community Development</span>
          </CategoryList> */}
        </Fade>
      </Categories>

      {/* MASONRY GRID */}
      <Section>
        <Grid>

          <Card large>
            <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80" />
            <div>
              <h3>Climate-Smart Farming Techniques</h3>
              <p>
                Learn modern agricultural practices that improve yields while protecting
                the environment.
              </p>
            </div>
          </Card>

        <Card>
  <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80" />
  <div>
    <h3>Mini-Grid Solutions Explained</h3>
    <p>How decentralized energy systems power rural communities.</p>
  </div>
</Card>

          <Card>
            <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80" />
            <div>
              <h3>Improving Rural Livelihoods</h3>
              <p>Strategies for sustainable economic growth in communities.</p>
            </div>
          </Card>

          <Card large>
            <img src="https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=800&q=80" />
            <div>
              <h3>Agro-Processing & Value Chains</h3>
              <p>
                Unlocking value in agriculture through processing and smart distribution.
              </p>
            </div>
          </Card>

        </Grid>
      </Section>

      {/* NEWSLETTER CTA */}
      <Newsletter>
        <Fade>
          <h2>Stay Informed</h2>
          <p>
            Get the latest insights on renewable energy, agriculture and sustainable development.
          </p>

          <Form>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </Form>
        </Fade>
      </Newsletter>

    </Page>
  );
};

export default ResourcesPage;

/* ================= STYLES ================= */

const Page = styled.div`
  font-family: Arial, sans-serif;
  h2{
  color:#1b67a8;
  }
  h3{
  color:#1b67a8;
  }
`;

/* HERO */
const Hero = styled.section`
  height: 65vh;
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
    rgba(0, 0, 0, 0.7)
  );
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
`;

/* FEATURED */
const Featured = styled.section`
  padding: 80px 20px;
`;

const FeaturedGrid = styled.div`
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const FeaturedText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Tag = styled.span`
  background: #ff4d4d;
  color: #fff;
  padding: 6px 12px;
  width: fit-content;
  border-radius: 20px;
  font-size: 12px;
  margin-bottom: 10px;
`;

const ReadMore = styled.div`
  margin-top: 20px;
  color: #1b67a8;
  font-weight: bold;
  cursor: pointer;
`;

/* CATEGORIES */
const Categories = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  span {
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 20px;
    background: #f0f4f8;

    &:hover {
      background: #1b67a8;
      color: #fff;
    }
  }
`;

/* GRID */
const Section = styled.section`
  padding: 0 20px 80px;
`;

const Grid = styled.div`
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  grid-row: ${({ large }) => (large ? "span 2" : "span 1")};

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }

  div {
    padding: 15px;
  }
`;

/* NEWSLETTER */
const Newsletter = styled.section`
  background: #1b67a8;
  color: #fff;
  text-align: center;
  padding: 80px 20px;
`;

const Form = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  input {
    padding: 12px;
    width: 250px;
    border: none;
  }

  button {
    padding: 12px 20px;
    border: none;
    background: #ff4d4d;
    color: #fff;
    cursor: pointer;
  }
`;