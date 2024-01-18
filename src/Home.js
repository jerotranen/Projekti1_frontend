import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import moment from 'moment-timezone';
import { HomeBackground, Content, Heading, SubHeading, NavLinkApply, Banner, BannerOverlay, BannerText, BannerImage, ExtraInfoBox, EmptySpace } from "./style"

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
          <EmptySpace></EmptySpace>
        </HomeBackground>
      </div>
    );
  };

  export default Home;