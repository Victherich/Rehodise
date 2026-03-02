import React, { useState } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Swal from 'sweetalert2'

/* HERO IMAGE */
const heroImage =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80";

const ContactPage = () => {
const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // 🔄 SHOW LOADING
  Swal.fire({
    title: "Sending...",
    text: "Please wait while we process your message",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const res = await fetch(
      "https://rehodise.com.ng/api/contact_form_endpoint.php", // 🔥 CHANGE THIS
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      }
    );

    const data = await res.json();

    // ✅ CLOSE LOADING FIRST
    Swal.close();

    if (data.success) {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: data.message,
        confirmButtonColor: "#1b67a8",
      });

      // RESET FORM
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.error,
        confirmButtonColor: "#ff4d4d",
      });
    }

  } catch (err) {
    Swal.close();

    Swal.fire({
      icon: "error",
      title: "Network Error",
      text: "Something went wrong. Please try again.",
      confirmButtonColor: "#ff4d4d",
    });

    console.error(err);
  }
};

  return (
    <Page>

      {/* HERO */}
      <Hero style={{ backgroundImage: `url(${heroImage})` }}>
        <Overlay />
        <HeroContent>
          <Fade direction="up">
            <h1>Contact Us</h1>
            <p>Let’s discuss your project, partnership, or inquiry</p>
          </Fade>
        </HeroContent>
      </Hero>

      {/* CONTACT TYPES */}
      <Section>
        <Container>
          <Fade>
            <h2>How Can We Help You?</h2>
          </Fade>

          <Grid>
            <Card>
              <h3>Business Inquiries</h3>
              <p>Reach out for services, solutions, and general engagements.</p>
            </Card>

            <Card>
              <h3>Partnership Inquiries</h3>
              <p>Collaborate with us on impactful development projects.</p>
            </Card>

            <Card>
              <h3>Project Funding</h3>
              <p>Explore investment and funding opportunities with us.</p>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* CONTACT + FORM */}
      <Split>
        <Left>
          <Fade>
            <h2 style={{color:"white"}}>Contact Information</h2>

            <Info>
              <h4>Phone</h4>
              <p>+234 806 487 6315</p>
            </Info>

            <Info>
              <h4>Email</h4>
              <p>info@rehodise.com.ng</p>
              <p>rehobothdunkemointegrated@gmail.com</p>
            </Info>

            <Info>
              <h4>Location</h4>
              <p>Lagos, Nigeria</p>
            </Info>
          </Fade>
        </Left>

        <Right>
          <Fade>
            <Form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Full Name"
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

       

              <input
  name="phone"
  placeholder="Phone Number"
  onChange={handleChange}
  required
/>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                onChange={handleChange}
              />

              <button type="submit">Send Message</button>
            </Form>
          </Fade>
        </Right>
      </Split>

      {/* MAP */}
      <MapSection>
        <Fade>
          <h2>Our Location</h2>
        </Fade>

        <MapWrapper>
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </MapWrapper>
      </MapSection>

    </Page>
  );
};

export default ContactPage;

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

/* SECTIONS */
const Section = styled.section`
  padding: 80px 20px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

/* CARDS */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const Card = styled.div`
  background: #f5f9fc;
  padding: 30px;
  border-radius: 12px;
`;

/* SPLIT */
const Split = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  padding: 60px;
  background: #1b67a8;
  color: #fff;
`;

const Right = styled.div`
  padding: 60px;
  background: #f5f9fc;
`;

const Info = styled.div`
  margin-bottom: 20px;
`;

/* FORM */
const Form = styled.form`
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

/* MAP */
const MapSection = styled.section`
  padding: 80px 20px;
  text-align: center;
`;

const MapWrapper = styled.div`
  margin-top: 30px;

  iframe {
    width: 100%;
    height: 400px;
    border: 0;
    border-radius: 15px;
  }
`;