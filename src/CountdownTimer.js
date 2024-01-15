import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom'; 
import { NavLinkApply} from './App';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(null);


  const calculateTimeUntil = () => {
    const targetDate = new Date('2023-11-13T12:00:00'); // TÄÄ ON USER LOCAL TIME
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
      setCountdown(null); 
    } else {
      setCountdown(timeRemaining);
    }
  };

  useEffect(() => {
    calculateTimeUntil();

    const timerInterval = setInterval(calculateTimeUntil, 1000);

    return () => {
      clearInterval(timerInterval); 
    };
  }, []);

  const formatTime = () => {
    if (countdown === null) {
      return 'Haku on jo päättynyt!';
    }

    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

    return `Haku aukeaa\n${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <NavLinkApply to={countdown === null ? 'https://docs.google.com/forms/d/e/1FAIpQLSdP0YtwebGvYd6GyIsh94M56s7lQt9C5HnTcUn4a8a-8uORrA/viewform?usp=sf_link' : '#'}
     disabled={countdown !== null}>
      {formatTime()}
    </NavLinkApply>
  );
};

export default CountdownTimer;