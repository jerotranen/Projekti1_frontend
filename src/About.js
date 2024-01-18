import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import { AboutBackground, AboutContent, Content, ExtraInfoBox} from "./style"

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

  export default About