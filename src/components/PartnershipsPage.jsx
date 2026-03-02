import React, { useState } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

// HERO IMAGE
const heroImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";

const PartnershipsPage = () => {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Partnership request submitted!");
  };

  return (
    <Page>

      {/* HERO */}
      <Hero style={{ backgroundImage: `url(${heroImage})` }}>
        <Overlay />
        <HeroContent>
          <Fade direction="up">
            <h1>Partnerships</h1>
            <p>Collaborating to deliver sustainable impact at scale</p>
          </Fade>
        </HeroContent>
      </Hero>

      {/* INTRO */}
      <Section>
        <Container>
          <Fade>
            <h2>Work With Us</h2>
            <p>
              We believe that meaningful and sustainable development is achieved
              through strong partnerships. Our collaborative approach brings together
              public institutions, private sector stakeholders, development organizations
              and communities to design and implement impactful solutions.
            </p>
          </Fade>
        </Container>
      </Section>

      {/* PARTNER TYPES */}
      <Section alt>
        <Container>
          <Fade>
            <h2>Who We Partner With</h2>
          </Fade>

          <Grid>

            <Card>
              <h3>Government Agencies</h3>
              <p>
                Supporting public sector initiatives in energy access, agriculture,
                infrastructure and community development programs.
              </p>
            </Card>

            <Card>
              <h3>NGOs & Non-Profits</h3>
              <p>
                Collaborating on social impact projects that improve livelihoods,
                food security and environmental sustainability.
              </p>
            </Card>

            <Card>
              <h3>Investors</h3>
              <p>
                Providing opportunities to invest in scalable, high-impact projects
                across energy and agribusiness sectors.
              </p>
            </Card>

            <Card>
              <h3>Development Organizations</h3>
              <p>
                Partnering on donor-funded programs focused on sustainable development,
                climate action and community resilience.
              </p>
            </Card>

            <Card>
              <h3>Technology Providers</h3>
              <p>
                Integrating innovative technologies in renewable energy, agriculture
                and monitoring systems to enhance project outcomes.
              </p>
            </Card>

          </Grid>
        </Container>
      </Section>

      {/* HOW WE COLLABORATE */}
      <Section>
        <Container>
          <Fade>
            <h2>How We Collaborate</h2>
          </Fade>

          <Steps>

            <Step>
              <span>01</span>
              <div>
                <h4>Identify Opportunities</h4>
                <p>
                  We work with partners to identify high-impact opportunities across
                  energy, agriculture and infrastructure sectors.
                </p>
              </div>
            </Step>

            <Step>
              <span>02</span>
              <div>
                <h4>Co-Design Solutions</h4>
                <p>
                  Jointly develop practical and scalable solutions tailored to specific
                  community and project needs.
                </p>
              </div>
            </Step>

            <Step>
              <span>03</span>
              <div>
                <h4>Implement Projects</h4>
                <p>
                  Execute projects with strong technical expertise, monitoring and
                  accountability.
                </p>
              </div>
            </Step>

            <Step>
              <span>04</span>
              <div>
                <h4>Measure Impact</h4>
                <p>
                  Track outcomes and ensure measurable social, economic and environmental impact.
                </p>
              </div>
            </Step>

          </Steps>
        </Container>
      </Section>

      {/* FORM */}
      <FormSection>
        <Container>
          <Fade>
            <h2>Become a Partner</h2>
            <p>Let’s build impactful and sustainable solutions together.</p>
          </Fade>

          <Form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

            <input
              name="organization"
              placeholder="Organization"
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

            <select name="type" onChange={handleChange} required>
              <option value="">Partnership Type</option>
              <option>Government Agency</option>
              <option>NGO / Non-Profit</option>
              <option>Investor</option>
              <option>Development Organization</option>
              <option>Technology Provider</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your interest"
              rows="5"
              onChange={handleChange}
            />

            <button type="submit">Submit Request</button>
          </Form>
        </Container>
      </FormSection>

    </Page>
  );
};

export default PartnershipsPage;

/* ================= STYLES ================= */

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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const Card = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
`;

const Steps = styled.div`
  margin-top: 40px;
`;

const Step = styled.div`
  display: flex;
  margin-bottom: 30px;

  span {
    font-size: 24px;
    font-weight: bold;
    color: #1b67a8;
    margin-right: 20px;
  }
`;

const FormSection = styled.section`
  padding: 80px 20px;
  background: #1b67a8;
  color: #fff;
  text-align: center;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  input, select, textarea {
    padding: 14px;
    border-radius: 8px;
    border: none;
  }

  button {
    padding: 14px;
    border: none;
    background: #ff4d4d;
    color: #fff;
    border-radius: 30px;
    font-weight: bold;
    cursor: pointer;
  }
`;