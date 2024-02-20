import styled, { keyframes, css } from 'styled-components';
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AboutBackground = styled.div`
  position: relative;
  background-image: url('https://i.imgur.com/TX7zQsw.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 25% 75%;
  min-height: 100vh;
  background-attachment: fixed;
  animation: ${fadeIn} 1s ease-in-out;
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
  @media (max-width: 768px) {
    height: 650px;
  }
`;

const ExtraInfoBox = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(247, 247, 247, 0.55);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
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

const NavLinkPage = styled(Link)`
justify-content: center; 
align-items: center;
color: #fff;
padding: 10px;
text-decoration: none;
border-radius: 4px;
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

const EmptySpace = styled.div`
  height: 150px;
  width: 100%;
  background: transparent;
`;

const GeneralBG = styled.div`
  background-image: ${(props) => `url(${props.backgroundUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  min-height: 100vh;
  background-attachment: fixed;
  animation: ${fadeIn} 1s ease-in-out;
  background-color: rgba(255, 255, 255, 0);
  @media (max-width: 768px) {
    
  } 
`;


export {
    fadeIn,
    AboutBackground,
    AboutContent,
    ExtraInfoBox,
    NavLinkInstagram,
    InstagramImage,
    MobileMenuIcon,
    MobileMenuLines,
    MobileMenu,
    MobileMenuItem,
    MobileStyles,
    DesktopStyles,
    Banner,
    BannerOverlay,
    BannerImage,
    BannerText,
    NavLinkApply,
    BackgroundContainer,
    GlobalStyle,
    Header,
    Logo,
    LogoImage,
    Nav,
    NavLink,
    Content,
    Heading,
    SubHeading,
    DropdownContent,
    DropdownTitle,
    Dropdown,
    EmptySpace,
    NavLinkPage,
    GeneralBG
}