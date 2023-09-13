import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import styled, {keyframes} from 'styled-components';
import { createGlobalStyle } from "styled-components";
import Events from "./Events";
import { SkiTrips } from "./SkiTrips";

const Home = () => (
  <div>
    <HomeBackground>
    <Content>
      <Heading>Teknillinen Skimbakerho</Heading>
      <SubHeading>Turun teknillinen laskettelukerho jo vuodesta 2023!</SubHeading>
      <NavLinkApply to="https://docs.google.com/forms/d/e/1FAIpQLSdN9yaGazcC_d1WBxSDxNSVSfYgQ_iVEp8MvIUN5cfdoxmECQ/viewform?pli=1">
        Hae jäseneksi!
      </NavLinkApply>
    </Content>
    <Banner>
      <BannerOverlay>
        <BannerText>JUURI NYT!</BannerText>
        <BannerImage src="https://cdn.discordapp.com/attachments/1136046313314730062/1149674459402346566/IMG_0280.jpg" alt="Juuri nyt" />
      </BannerOverlay>
    </Banner>
    </HomeBackground>
    </div>
);

const About = () => (
  <Content>
    <h1>Meistä</h1>
    <p>Teknillinen Skimbakerho eli Teski on tammikuun 2023 pimeydessä perustettu Turun yliopiston ja ÅA:n teknillisen tiedekunnan laskettelukerho, josta ei hauskanpitoa, nousuhumalaa, skimbaamista, uusia kaverisuhteita ja kaikkea julkaisukelvotonta puutu!😎
    <p>
    Teski järjestää jäsenilleen ja muille mm. tapahtumia, lajikokeiluja ja kotimaan ja ulkomaan (laskettelu)reissuja. Liity jäseneksi ja kuule lisää!

<p>
Hallitus:

Puheenjohtaja
Aleksi Paajaste, ututunnus??

Varapuheenjohtaja
Aleksi Hirviniemi
</p>
    </p>
</p>
  </Content>
);

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
    <GlobalStyle />
    <BackgroundContainer>
      <Header>
      <Logo to="/teski">
          <LogoImage src="https://i.imgur.com/53BiitD.png" alt="Logo" />
          Teski
        </Logo>
        <Nav>
          <NavLink to="/teski">Koti</NavLink>
          <NavLink to="/teski/about">Toiminta</NavLink>
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HomeBackground = styled.div`
  background-image: url('https://cdn.discordapp.com/attachments/1136046313314730060/1150845049073041498/44d08cda-da38-4f9a-af75-cdc3941f51d7.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  background-attachment: fixed;

  animation: ${fadeIn} 1s ease-in-out; /* Adjust the duration and easing as needed */
  /* Set a background color for the initial blank background */
  background-color: rgba(255, 255, 255, 0);

  /* Set the initial background image to a blank/transparent image */
  background-image: url('https://cdn.discordapp.com/attachments/1136046313314730060/1150845049073041498/44d08cda-da38-4f9a-af75-cdc3941f51d7.jpg');
  /* Replace the blank image above with your actual background image URL */

`;

const Banner = styled.div`
  display: flex;
  flex-direction: row; /* Change to row to align elements horizontally */
  align-items: center;
  justify-content: flex-start; /* Align items to the left side */
  margin-top: 20px; /* Adjust the margin as needed */
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 52.5%;
  left: 15%;
  transform: translate(-50%, -50%);
  background-color: #002278;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

const BannerText = styled.p`
  font-size: 20px;
  color: #FFD700;
  margin: 0;
  padding: 10px
`;

const BannerImage = styled.img`
  width: 100%; /* Adjust the width as needed */
  max-width: 300px; /* Limit the maximum width of the image */
  height: auto; /* Maintain the aspect ratio of the image */
`;

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

const BackgroundContainer = styled.div`
  background-image: url("https://i.imgur.com/53BiitD.png");
  background-size: 30%; /* Change 'cover' to 'contain', '100%', or specific dimensions as needed */
  background-repeat: no-repeat;
  background-position: center bottom 20%;
  min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', serif;
    margin: 0; /* Add this line to remove the margin from the body element */
  }
`;

const Header = styled.header`
  background-color: #002278;
  color: #fff;
  padding: 25px;
  display: flex;
  align-items: center;
  margin-bottom: 0;
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
  margin-bottom: 10px; /* Add more space between the NavLink items */
  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0px auto;
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
  padding: 10px 0; /* Add padding to the top and bottom */
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
    flex-direction: column; /* Display the links vertically */
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


export { Heading, SubHeading, BannerImage, NavLinkApply};