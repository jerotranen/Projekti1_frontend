import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Events from "./Events";
import SkiTrips from "./SkiTrips";

const Home = () => (
  <Content>
    <Heading>Teknillinen Skimbakerho</Heading>
    <SubHeading>Turun teknillinen laskettelukerho jo vuodesta 2023!</SubHeading>
  </Content>
);

const About = () => (
  <Content>
    <h1>Meistä</h1>
    <p>Turun teknillinen skimbakerho! kertokaa ny jotai itestänne vittu</p>
  </Content>
);

const Contact = () => (
  <Content>
    <h1>Yhteystiedot ja somet</h1>
    <p>Email: teknillinenskimbakerho@utu.fi</p>
    <p>Instagram: teknillinenskimbakerho</p>
  </Content>
);

const App = () => (
  <Router>
    <BackgroundContainer>
      <Header>
        <Logo to="/teski">Teski</Logo>
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
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
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
  background-color: #f7f7f7;
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
  background-color: #000080;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10; /* Increase the z-index to ensure it's above other elements */

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
