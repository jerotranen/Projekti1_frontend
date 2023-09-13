import React from 'react';
import styled, {keyframes} from 'styled-components';

const Events = () => (
    <EventsBackground>
      <Content>
    <h1>Tulevat/Menneet tapahtumat</h1>
    <p><strong>Tulevat:</strong></p>
    <p>
      Lajikokeilu
    </p>
    <br />
    <p><strong>Menneet:</strong></p>
    <p>
      Teekkarirastikierros
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

  animation: ${fadeIn} 1s ease-in-out; /* Adjust the duration and easing as needed */
  /* Set a background color for the initial blank background */
  background-color: rgba(255, 255, 255, 0);

  /* Set the initial background image to a blank/transparent image */
  background-image: url('https://i.imgur.com/ovZdoCU.jpg');
  /* Replace the blank image above with your actual background image URL */

`;

const Content = styled.div`
  max-width: 600px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgba(247, 247, 247, 0.8); /* Use RGBA color with reduced opacity */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export default Events;