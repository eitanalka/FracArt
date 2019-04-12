import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleSignIn from 'react-google-login';
import styled from 'styled-components';

import { Form, FormInput, FormError } from '../common';

import { validateUsername } from '../../utils/validators';

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
  font-size: 1.7rem;
  text-decoration: none;
`;

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      googleToken: '',
      username: '',
      error: '',
    }
  };

  componentDidUpdate() {
    const {
      createdUsername,
      createUsernameRequestSent,
    } = this.props;

    if(createdUsername) {
      return this.props.googleSignIn(this.state.googleToken);
    }

    if (createUsernameRequestSent) {
      this.props.resetUsernameRequest();
      return this.setState(() => ({ error: 'Username already in use' }));
    }
  }

  onGoogleSignInSuccess = response => {
    const googleToken = response.tokenId;
    this.setState(() => ({ googleToken }));
    this.props.googleSignIn(googleToken);
  };

  onGoogleSignInFail = () => {
    return; 
  };

  onUsernameChange = event => {
    const username = event.target.value;
    this.setState(() => ({ username }));
  };

  onSubmit = event => {
    event.preventDefault();

    const { username } = this.state;

    if (!validateUsername(username)) {
      return this.setState(() => ({
        error: `Please enter a valid username.
        Usernames must be between 4 and 25 characters,
        must only contain letters, numbers, and underscores,
        start with a letter or number, must not have
        more than two underscores in a row, and must end
        with a letter or number.`
      }));
    }

    this.setState(() => ({ error: '' }));

    this.props.createUsername(username, this.state.googleToken);
  };
  
  LoginDialog = () => (
    <React.Fragment>
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
    </React.Fragment>
  );
  
  CreateUsernameDialog = () => (
    <React.Fragment>
      <Form onSubmit={this.onSubmit}>
        <HomeSubtitle>Create a username:</HomeSubtitle>
        {this.state.error && (
          <FormError>{this.state.error}</FormError>
        )}
        <FormInput 
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={this.onUsernameChange}
          required
        />
      </Form>
    </React.Fragment>
  );

  render() {
    const { hasUsername, unauthorized } = this.props;

    return (
      <HomeWrapper>
        <HomeDialog>
          {unauthorized && <this.LoginDialog />}
          {!hasUsername && !unauthorized && <this.CreateUsernameDialog />}
        </HomeDialog>
      </HomeWrapper>
    );
  }
}

export default HomeComponent;
