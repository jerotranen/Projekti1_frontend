import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import styled, {keyframes, css} from 'styled-components';
import { createGlobalStyle } from "styled-components";
import moment from 'moment-timezone';

import CountdownTimer from "./CountdownTimer";
import Events from "./Events";
import { SkiTrips } from "./SkiTrips";
import About from "./About"
import Home from "./Home";
import Contact from "./Contact"
import Jaseneksi from "./Jaseneksi";

import { GlobalStyle, BackgroundContainer, Header, MobileStyles, DesktopStyles, Logo, LogoImage, MobileMenu, MobileMenuIcon, MobileMenuLines, MobileMenuItem, Nav, DropdownContent, Dropdown, DropdownTitle, NavLink } from "./style";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // New state to control mobile menu visibility

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {isMobile ? <MobileStyles /> : <DesktopStyles />}
      <Router>
        <GlobalStyle />
        <BackgroundContainer>
          <Header>
            <Logo to="/teski">
              <LogoImage src="https://i.imgur.com/53BiitD.png" alt="Logo" />
              Teski
            </Logo>
            {isMobile ? (
              // Mobile menu icon and dropdown
              <MobileMenuIcon onClick={toggleMobileMenu}>
                <MobileMenuLines />
                <MobileMenuLines />
                <MobileMenuLines />
              </MobileMenuIcon>
            ) : (
              // Desktop navigation
              <Nav isMobile={isMobile}>
                <Dropdown>
                  <DropdownTitle>Ajankohtaista</DropdownTitle>
                  <DropdownContent>
                    <NavLink to="/teski/events">Tapahtumat</NavLink>
                    <NavLink to="/teski/ski-trips">Laskettelureissut</NavLink>
                  </DropdownContent>
                </Dropdown>
                <NavLink to="/teski/about">Toiminta</NavLink>
                <NavLink to="/teski/contact">Yhteystiedot/Somet</NavLink>
              </Nav>
            )}
          </Header>
          {isMobile && menuOpen && (
            // Mobile menu dropdown
            <MobileMenu>
              <MobileMenuItem to="/teski/about" onClick={closeMobileMenu}>
                Toiminta
              </MobileMenuItem>
              <MobileMenuItem to="/teski/events" onClick={closeMobileMenu}>
                Tapahtumat
              </MobileMenuItem>
              <MobileMenuItem to="/teski/ski-trips" onClick={closeMobileMenu}>
                Laskettelureissut
              </MobileMenuItem>
              <MobileMenuItem to="/teski/contact" onClick={closeMobileMenu}>
                Yhteystiedot/Somet
              </MobileMenuItem>
            </MobileMenu>
          )}
          <Routes>
            <Route path="/teski/" element={<Home />} />
            <Route path="/teski/about" element={<About />} />
            <Route path="/teski/events" element={<Events />} />
            <Route path="/teski/ski-trips" element={<SkiTrips />} />
            <Route path="/teski/contact" element={<Contact />} />
            <Route path="/teski/jaseneksi" element={<Jaseneksi />} />
          </Routes>
        </BackgroundContainer>
      </Router>
    </>
  );
};

export default App;