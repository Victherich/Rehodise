import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import LogoImage from "../Images/logo.jpeg"; // replace with your logo path

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Top>
          {/* LOGO & BRAND */}
          <Brand>
            <Logo src={LogoImage} alt="Rehoboth Dunkemo Logo" />
            <Tagline>Advancing Sustainable Communities Through Energy & Agriculture</Tagline>
          </Brand>

          {/* NAV LINKS */}
          <Nav>
            <NavColumn>
              <ColumnTitle>Quick Links</ColumnTitle>
              <NavList>
                <li><StyledLink to="/">Home</StyledLink></li>
                <li><StyledLink to="/about">About</StyledLink></li>
                <li><StyledLink to="/solutions">Our Solutions</StyledLink></li>
                <li><StyledLink to="/projects">Projects & Impacts</StyledLink></li>
                <li><StyledLink to="/sustainability">Sustainability & SDGs</StyledLink></li>
                <li><StyledLink to="/partnerships">Partnerships</StyledLink></li>
                <li><StyledLink to="/resources">Resources / Insights</StyledLink></li>
                <li><StyledLink to="/contact">Get in Touch</StyledLink></li>
              </NavList>
            </NavColumn>

            {/* CONTACT */}
            <NavColumn>
              <ColumnTitle>Contact Us</ColumnTitle>
              <ContactInfo>
                <p>Email: <a href="mailto:info@rehobothdunkemo.com">info@rehobothdunkemo.com</a></p>
                <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
                <p>Address: 123 Greenway Ave, Agrotech City</p>
              </ContactInfo>

              <Social>
                <SocialIcon href="#"><FaFacebookF /></SocialIcon>
                <SocialIcon href="#"><FaTwitter /></SocialIcon>
                <SocialIcon href="#"><FaLinkedinIn /></SocialIcon>
                <SocialIcon href="#"><FaInstagram /></SocialIcon>
              </Social>
            </NavColumn>
          </Nav>
        </Top>

        <Bottom>
          <p>© {new Date().getFullYear()} Rehoboth Dunkemo Integrated Services and Energy Ltd. All rights reserved.</p>
        <br/>
        <p>
          POWERED BY ELEXDON DIGITAL TECHNOLOGIES LIMITED
        </p>
        </Bottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;

/* ================= STYLES ================= */

const FooterSection = styled.footer`
  background: #1b67a8;
  color: #fff;
  padding: 60px 20px 30px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 40px;
`;

const Brand = styled.div`
  flex: 1 1 250px;
`;

const Logo = styled.img`
  max-width: 50px;
  margin-bottom: 15px;
`;

const Tagline = styled.p`
  font-size: 14px;
  line-height: 1.5;
  max-width: 250px;
  color: #d0e7ff;
`;

const Nav = styled.div`
  display: flex;
  flex: 2 1 600px;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavColumn = styled.div`
  flex: 1;
`;

const ColumnTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 15px;
  // color: #ff4d4d; 
  color:yellow;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: #ffdcdc;
  }
`;

const ContactInfo = styled.div`
  p {
    margin: 5px 0;
    font-size: 14px;
    color: #e0e0e0;

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        color: #ff4d4d;
      }
    }
  }
`;

const Social = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 18px;
  transition: 0.3s;

  &:hover {
    color: #ff4d4d;
  }
`;

const Bottom = styled.div`
  text-align: center;
  border-top: 1px solid #145a96;
  padding-top: 20px;
  font-size: 14px;
  color: #cfe8ff;
`;