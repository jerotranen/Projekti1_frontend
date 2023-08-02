import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Events from "./Events";
import SkiTrips from "./SkiTrips";

const Home = () => (
  <Content>
    <Heading>Teknillinen Skimbakerho</Heading>
    <SubHeading>Turun teknillinen laskettelukerho jo vuodesta 2023!</SubHeading>
    <NavLinkApply to="https://docs.google.com/forms/d/e/1FAIpQLSdN9yaGazcC_d1WBxSDxNSVSfYgQ_iVEp8MvIUN5cfdoxmECQ/viewform?pli=1">
        Hae jäseneksi!
      </NavLinkApply>
  </Content>
);

const About = () => (
  <Content>
    <h1>Meistä</h1>
    <p>Turun teknillinen skimbakerho!</p>
  </Content>
);

const NavLinkApply = styled(Link)`
  color: #fff;
  background-color: #000080; /* Set a background color */
  padding: 10px 20px; /* Add padding to create a button-like appearance */
  text-decoration: none;
  margin-left: 20px;
  border-radius: 4px; /* Add rounded corners */
  font-weight: bold;
  &:hover {
    background-color: #0000a0; /* Change the background color on hover */
    text-decoration: none;
  }
`;

const NavLinkInstagram = styled(Link)`
  color: #000; /* Set the color to black */
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const InstagramImage = styled.img`
  width: 20px;
  margin-right: 5px;
  vertical-align: middle; /* Adjust the value to align the image relative to the surrounding text */
`;

const Contact = () => (
  <Content>
    <h1>Yhteystiedot ja somet</h1>
    <p>Email: teknillinenskimbakerho@utu.fi</p>
    <p>
      <NavLinkInstagram to="https://www.instagram.com/teknillinenskimbakerho/">
        <InstagramImage
          src="https://img.freepik.com/premium-vector/purple-gradiend-social-media-logo_197792-1883.jpg"
          alt="Instagram"
        />
        teknillinenskimbakerho
      </NavLinkInstagram>
    </p>
  </Content>
);

const App = () => (
  <Router>
    <BackgroundContainer>
      <Header>
      <Logo to="/teski">
          <LogoImage src="https://i.imgur.com/53BiitD.png" alt="Logo" />
          Teski
        </Logo>
        <Nav>
          <NavLink to="/teski">Koti</NavLink>
          <NavLink to="/teski/about">Meistä</NavLink>
          <Dropdown>
            <DropdownTitle>Ajankohtaista</DropdownTitle>
            <DropdownContent>
              <NavLink to="/teski/events">Tapahtumat</NavLink>
              <NavLink to="/teski/ski-trips">Laskettelureissut</NavLink>
            </DropdownContent>
          </Dropdown>
          <NavLink to="/teski/contact">Yhteystiedot/Somet</NavLink>
        </Nav>
      </Header>
      <Routes>
        <Route path="/teski/" element={<Home />} />
        <Route path="/teski/about" element={<About />} />
        <Route path="/teski/events" element={<Events />} />
        <Route path="/teski/ski-trips" element={<SkiTrips />} />
        <Route path="/teski/contact" element={<Contact />} />
      </Routes>
    </BackgroundContainer>
  </Router>
);

const BackgroundContainer = styled.div`
  background-image: url("https://i.imgur.com/53BiitD.png");
  background-size: 30%; /* Change 'cover' to 'contain', '100%', or specific dimensions as needed */
  background-repeat: no-repeat;
  background-position: center bottom 20%;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #646464;
  color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const LogoImage = styled.img`
  width: 30px; /* Adjust the width of the logo image as needed */
  margin-right: 10px; /* Add some space between the logo image and the text */
`;


const Nav = styled.nav`
  margin-left: auto;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: rgba(247, 247, 247, 0.8); /* Use RGBA color with reduced opacity */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Heading = styled.h1`
  color: #000080;
`;

const SubHeading = styled.p`
  color: #000080;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  /* No changes needed here */
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: rgba(0, 0, 128, 0.8); /* Use RGBA color with reduced opacity */
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
  /* Increase the z-index to ensure it's above other elements */
  /* Position the DropdownContent relative to its parent Dropdown */
  ${Dropdown}:hover & {
    display: block;
    /* Position the DropdownContent below the DropdownTitle */
    top: 100%;
    left: 0;
  }
`;


const DropdownTitle = styled.span`
  color: #fff;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;

  /* No changes needed here */
`;

export default App;
