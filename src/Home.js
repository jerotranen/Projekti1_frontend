import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import moment from 'moment-timezone';
import { Content, Heading, SubHeading, NavLinkApply, Banner, BannerOverlay, BannerText, BannerImage, ExtraInfoBox, EmptySpace, GeneralBG } from "./style"

const Home = () => {
    const shouldShowBanner = true;
    const currentTime = moment().tz('Europe/Helsinki'); 
  
    const targetTime = moment.tz('2024-02-14T12:00:00', 'Europe/Helsinki');

    return (
      <div>
         <GeneralBG backgroundUrl="https://i.imgur.com/8uWZiLr.jpg">
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
                <Link to="https://forms.gle/famEeSCG7mgV5d2p7">
                  <BannerText>Hae Teskin hallitukseen!</BannerText>
                  <BannerImage src="https://i.imgur.com/IkAuUw3.jpeg" alt="Juuri nyt" />
                  <BannerText></BannerText>
                </Link>
              </BannerOverlay>
            </Banner>
          )}
          <EmptySpace></EmptySpace>
        </GeneralBG>
      </div>
    );
  };

  export default Home;