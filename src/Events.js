import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Heading, SubHeading} from './style';

const Events = () => (
    <EventsBackground>
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
    </EventsBackground>
);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const EventsBackground = styled.div`
  background-image: url('https://i.imgur.com/ovZdoCU.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  background-attachment: fixed;
  animation: ${fadeIn} 1s ease-in-out; 
  background-color: rgba(255, 255, 255, 0);
`;

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
    max-width: 70%; /* Adjust the width for mobile */
    padding: 20px; /* Adjust padding for mobile */
    font-size: 16px; /* Adjust font size for mobile */
    /* Add any other mobile-specific styles here */
  }
`;

export default Events;