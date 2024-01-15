import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import styled, {keyframes, css} from 'styled-components';
import { createGlobalStyle } from "styled-components";
import Events from "./Events";
import { SkiTrips } from "./SkiTrips";
import CountdownTimer from "./CountdownTimer";
import moment from 'moment-timezone';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Home = () => {
  const shouldShowBanner = false;
  const currentTime = moment().tz('Europe/Helsinki'); 

  const targetTime = moment.tz('2023-11-13T10:50:40', 'Europe/Helsinki');

  return (
    <div>
      <HomeBackground>
        <Content>
          <Heading>Teknillinen Skimbakerho</Heading>
          <SubHeading>Turun teknillinen laskettelukerho jo vuodesta 2023!</SubHeading>
          <NavLinkApply to="/teski/jaseneksi">
            Hae jäseneksi!
          </NavLinkApply>
        </Content>
        {shouldShowBanner && currentTime.isSameOrAfter(targetTime) && (
          <Banner>
            <BannerOverlay>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLScNnwamwFYP9W2dmUy_m9Z1qBsoYf-EQZ5plFGFZF-WAonzwQ/viewform?usp=sf_link">
                <BannerText>JUURI NYT!</BannerText>
                <BannerImage src="https://i.imgur.com/qWAtaGZ.png" alt="Juuri nyt" />
                <BannerText>Teksti tähän</BannerText>
              </Link>
            </BannerOverlay>
          </Banner>
        )}
      </HomeBackground>
    </div>
  );
};

const About = () => (
  <AboutBackground>
    <AboutContent>
  <Content>
    <h2>Meistä</h2>
    <p>
    Teknillinen Skimbakerho eli Teski on tammikuun 2023 pimeydessä perustettu Turun yliopiston ja ÅA:n teknillisen tiedekunnan laskettelukerho, josta ei hauskanpitoa, nousuhumalaa, skimbaamista, uusia kaverisuhteita ja kaikkea julkaisukelvotonta puutu!😎
    </p>
    <p>
    Teski järjestää jäsenilleen ja muille mm. tapahtumia, lajikokeiluja ja kotimaan ja ulkomaan (laskettelu)reissuja. Liity jäseneksi ja kuule lisää!
    </p>
  </Content>
</AboutContent>
<ExtraInfoBox>
  <h2>Hallitus</h2>
  <p>
  Lisää tietoa tulossa, yhteydenotot sähköpostitse tai Instagramissa
  </p>
</ExtraInfoBox>
</AboutBackground>
);


const AboutBackground = styled.div`
  position: relative;
  background-image: url('https://cdn.discordapp.com/attachments/1136046313314730060/1150843263679467570/IMG_8253.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  background-attachment: fixed;
  animation: ${fadeIn} 1s ease-in-out;
  @media (min-width: 769px) {
    background-image: url('https://cdn.discordapp.com/attachments/1136046313314730060/1150845049073041498/44d08cda-da38-4f9a-af75-cdc3941f51d7.jpg');
  }
`;

const AboutContent = styled.div`
  max-width: 600px;
  margin: 0px auto;
  padding: 0px;
  background-color: rgba(247, 247, 247, 0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0);
  text-align: center;
  height: 780px;
  overflow-y: auto;
`;

const ExtraInfoBox = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(247, 247, 247, 0.55);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Contact = () => (
  <Content>
    <h1>Yhteystiedot ja somet</h1>
    <p>Email: teknillinenskimbakerho@utu.fi</p>
    <p>
      <NavLinkInstagram to="https://www.instagram.com/teknillinenskimbakerho/">
        <InstagramImage
          src="https://e7.pngegg.com/pngimages/953/528/png-clipart-instagram-icon-logo-desktop-computer-icons-instagram-miscellaneous-text.png"
          alt="Instagram"
        />
        teknillinenskimbakerho
      </NavLinkInstagram>
    </p>
  </Content>
);

const Jaseneksi = () => (
  <JaseneksiBackground>
    <Content>
      <div style={{ margin: '10px 0' }}></div>
      <p>Valitse alla olevista vaihtoehdoista itseäsi koskeva vaihtoehto.</p>
      <div style={{ margin: '35px 0' }}></div>
      <div>
          <NavLinkApply to="https://docs.google.com/forms/d/e/1FAIpQLSdN9yaGazcC_d1WBxSDxNSVSfYgQ_iVEp8MvIUN5cfdoxmECQ/viewform?usp=sf_link">
            Teknillisen opiskelijat
          </NavLinkApply>
          <div style={{ margin: '35px 0' }}></div>
          <NavLinkApply to="https://docs.google.com/forms/d/e/1FAIpQLSeuSpuOEtjlIG9IShKaF9fMV8rEwNhZFz-jlb-P0GvHe3543w/viewform?usp=sf_link">
            Muut
          </NavLinkApply>
    </div>
    </Content>
  </JaseneksiBackground>
);

const JaseneksiBackground = styled.div`
  position: relative;
  background-image: url('https://i.imgur.com/bLUFloS.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  background-attachment: fixed;
  animation: ${fadeIn} 1s ease-in-out;
`;

const NavLinkInstagram = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    text-decoration: underline;
  }
`;


const InstagramImage = styled.img`
  width: 20px;
  margin-right: 5px;
  vertical-align: middle;
`;

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
              
  const MobileMenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

  const MobileMenuLines = styled.span`
  width: 20px;
  height: 2px;
  background-color: #fff;
  margin: 2.5px 0;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #002278;
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  z-index: 1;
`;

const MobileMenuItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  &:hover {
    background-color: #0000a0;
  }
`;

const MobileStyles = createGlobalStyle`
  body {
    font-size: 16px;
    text-align: center;
  }
`;

const DesktopStyles = createGlobalStyle`
  body {
  }
`;

const HomeBackground = styled.div`
  position: relative;
  background-image: url('https://i.imgur.com/8uWZiLr.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  background-attachment: fixed;
  animation: ${fadeIn} 1s ease-in-out;
  background-color: rgba(255, 255, 255, 0);
`;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 60%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 1;
`;

const BannerOverlay = styled.div`
  background-color: #002278;
  padding: 0.5%;
  border-radius: 5px;
  text-align: center;
  width: 30%;
  max-width: 400px;
  margin: 0 auto;
`;

const bannerTextStyles = css`
  font-size: 20px;
  color: #FFD700;
  margin: 0;
  padding: 10px;
`;

const BannerText = styled.p`
  ${bannerTextStyles}
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;

const NavLinkApply = styled(Link)`
  justify-content: center; 
  align-items: center;
  color: #fff;
  background-color: #000080;
  padding: 10px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    background-color: #0000a0;
    text-decoration: none;
  }
`;

const BackgroundContainer = styled.div`
  background-image: url("https://i.imgur.com/53BiitD.png");
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: center bottom 20%;
  min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', serif;
    margin: 0;
  }
`;

const Header = styled.header`
  background-color: #002278;
  color: #fff;
  padding: 25px;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  justify-content: space-between;
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
  width: 30px;
  margin-right: 10px;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgba(247, 247, 247, 0.55);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Heading = styled.h1`
  color: #000080;
`;

const SubHeading = styled.p`
  color: #000000;
  font-size: 18px;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  padding: 10px 0;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: rgba(0, 0, 128, 0.8);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
  ${Dropdown}:hover & {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
  }
`;

const DropdownTitle = styled.span`
  color: #fff;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
`;

export default App;


export { Heading, SubHeading, BannerImage, NavLinkApply, ExtraInfoBox, AboutContent};