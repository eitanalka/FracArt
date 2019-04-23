import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GoogleSignIn from 'react-google-login';

const HeaderWrapper = styled.header`
  align-items: center;
  display:flex;
  justify-content: center;
  width: 100vw;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 80rem;
  width: 100vw;
  padding: 2rem 0;
`;


const StyledLink = styled(Link)`
  color: white;
  font-size: 3rem;
  text-decoration: none;
`;

const StyledGoogleSignIn = styled(GoogleSignIn)`
  color: ${props => props.theme.buttonColor} !important;
  font-size: 2rem !important;
`;

const HeaderItem = styled.h1`
  color: white;
  cursor: pointer;
  font-size: 3rem;
`;

class HeaderComponent extends React.Component {
  onGoogleSignInSuccess = response => {
    const googleToken = response.tokenId;
    this.props.googleSignIn(googleToken);
  };

  onGoogleSignInFail = () => {
    return; 
  };

  signout = () => {
    this.props.googleSignOut();
    this.props.history.push('/');
  }

  render() {
    return (

      <HeaderWrapper>
        <Container>
          <StyledLink to="/">FracArt</StyledLink>
        

          {!this.props.isLoggedIn ? (
            <StyledGoogleSignIn
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Sign in with Google"
              onSuccess={this.onGoogleSignInSuccess}
              onFailure={this.onGoogleSignInFail}
            />
          ) : (
            <HeaderItem onClick={this.signout}>Sign Out</HeaderItem>
          )}
        </Container>
      </HeaderWrapper>
    );
  }
}

export default HeaderComponent;
