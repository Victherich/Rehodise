import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Images/logo.jpeg";
import HeaderDropdown from "./DropDown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  // CLOSE MENU WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <HeaderContainer>
      <Fade triggerOnce direction="down">
        <Nav ref={menuRef}>
          <Logo as={NavLink} to="/">
            <Img src={logo} alt="logo" />
          </Logo>

          <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </MenuIcon>

          <NavLinks open={menuOpen}>
            <li>
              <StyledLink to="/" onClick={closeMenu}>HOME</StyledLink>
            </li>
            <li>
              <StyledLink to="/about" onClick={closeMenu}>ABOUT</StyledLink>
            </li>
            <li>
              <StyledLink to="/solutions" onClick={closeMenu}>OUR SOLUTIONS</StyledLink>
            </li>
            <li>
              <StyledLink to="/projects" onClick={closeMenu}>PROJECTS & IMPACTS</StyledLink>
            </li>
            <li>
              <StyledLink to="/sustainability" onClick={closeMenu}>SUSTAINABILITY & SDGs</StyledLink>
            </li>
            {/* <HeaderDropdown/> */}
            <li>
              <StyledLink to="/partnerships" onClick={closeMenu}>PARTNERSHIPS</StyledLink>
            </li>

             <li>
              <StyledLink to="/resources" onClick={closeMenu}>RESOURCES / INSIGHTS</StyledLink>
            </li>
            <CTAButton2 onClick={()=>{navigate('/contact');closeMenu()}}>Get in Touch</CTAButton2>
          </NavLinks>

          <CTAButton onClick={()=>navigate('/contact')}>Get in Touch</CTAButton>
        </Nav>
      </Fade>
    </HeaderContainer>
  );
};

export default Header;

/* ================= STYLES ================= */

const HeaderContainer = styled.header`
  width: 100%;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  // max-width: 1200px;
  margin: auto;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1B67A8;
  line-height: 1.2;
  display: flex;
  gap: 10px;
  align-items: center;
  text-decoration: none;

  span {
    display: block;
    font-size: 0.75rem;
    color: #444;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  transition: 0.3s;
  font-size:0.8rem;
  font-weight:bold;

  @media (max-width: 768px) {
    position: absolute;
    top: 50px;
    right:0;
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    background: #fff;
    width: 250px;
    padding: 2rem;
    box-shadow: -5px 0 20px rgba(0,0,0,0.1);
    height: calc(100vh - 80px);
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #222;
  font-weight: 500;
  transition: 0.3s;

  &:hover,
  &.active {
    color: #1B67A8;
  }
`;

const CTAButton = styled.button`
  background: #1B67A8;
  color: white;
  border: none;
  padding: 0.7rem 1.4rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #1B67A8;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CTAButton2 = styled.button`
  background: #1B67A8;
  color: white;
  border: none;
  padding: 0.7rem 1.4rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  display:none;

  &:hover {
    background: #1B67A8;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.4rem;
  cursor: pointer;
  color: #1B67A8;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Img = styled.img`
  width: 40px;
`;
