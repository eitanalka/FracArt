import React from 'react';
import styled from 'styled-components';

import Particles from './ParticlesComponent';

const HomeWrapper = styled.div`
  align-items: center;
  background: ${props => props.theme.background};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const HomeDialog = styled.div`
  align-items: center;
  background: ${props => props.theme.background};
  border-radius: 25px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  text-align: center;
`;

const HomeTitle = styled.h1`
  font-size: 5rem;
`;

const HomeSubtitle = styled.h2`
  font-size: 2rem;
  margin-top: 0;
`;

const HomeComponent = () => (
  <HomeWrapper>
    <Particles />
    <HomeDialog>
      <HomeTitle>FracArt</HomeTitle>
      <HomeSubtitle>Create, share, and explore stunning fractals</HomeSubtitle>
      {/* Google Login Button */}
      {/* Continue as guest */}
    </HomeDialog>
  </HomeWrapper>
);

export default HomeComponent;
