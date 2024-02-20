import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Heading, SubHeading, fadeIn, GeneralBG} from './style';

const Events = () => (
    <GeneralBG backgroundUrl='https://i.imgur.com/ovZdoCU.jpg'>
    <Content>
    <Heading>Tulevat/Menneet tapahtumat</Heading>
    <SubHeading><strong>Tulevat:</strong></SubHeading>
    <p>
      ;)
    </p>
    <br />
    <SubHeading><strong>Menneet:</strong></SubHeading>
    <p>
      Teskin pikkujoulut
    </p>
    <p>
      Kiipeily
    </p>
    <p>
      Paintball
    </p>
    <p>
      Eldprowet
    </p>
    <p>
      Laskukaudenpäättäjäiset
    </p>
    <p>
      Teski x WSP Sappee
    </p>
    </Content>
    </GeneralBG>
);

const Content = styled.div`
  max-width: 600px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgba(247, 247, 247, 0.75);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  p {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2); 
  }
  @media (max-width: 768px) {
    max-width: 70%;
    padding: 20px; 
    font-size: 16px;
  }
`;

export default Events;