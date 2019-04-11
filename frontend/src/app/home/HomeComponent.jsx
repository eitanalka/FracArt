import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleSignIn from 'react-google-login';
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
  font-size: 10rem;
  margin-bottom: 2rem;
`;

const HomeSubtitle = styled.h2`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 2.5rem;
`;

const StyledGoogleSignIn = styled(GoogleSignIn)`
  color: ${props => props.theme.buttonColor} !important;
  font-size: 2rem !important;
  margin-bottom: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
`;

class HomeComponent extends Component {
  onGoogleSignInSuccess = response => {
    console.log(response);
  };

  onGoogleSignInFail = response => {
    console.log(response);
  };

  render() {
    return (
      <HomeWrapper>
        <Particles />
        <HomeDialog>
          <HomeTitle>FracArt</HomeTitle>
          <HomeSubtitle>
            Create, share, and explore stunning fractals
          </HomeSubtitle>
          <StyledGoogleSignIn
            clientId="487573911432-js1d59ujj2m6q1o4cvbpi9i0phkjav05.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={this.onGoogleSignInSuccess}
            onFailure={this.onGoogleSignInFail}
          />
          <StyledLink to="/create">Or continue as guest</StyledLink>
        </HomeDialog>
      </HomeWrapper>
    );
  }
}

export default HomeComponent;
