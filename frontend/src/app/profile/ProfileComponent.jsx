import React, { Component } from 'react';
import styled from 'styled-components';

import { FractalItem } from '../common';

const ProfileComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 100vw;
`;

const ProfileTitle = styled.h1`
  font-size: 6rem;
  text-align: center;
`;

const FractalsContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-evenly;
  margin: auto;
  max-width: 80rem;
`;

class ProfileComponent extends Component {
  componentDidMount() {
    const { googleToken, username, getFractals } = this.props;
    getFractals(googleToken, username);
  }

  render() {
    return (
      <ProfileComponentWrapper>
        <ProfileTitle>Your Fractals</ProfileTitle>
        <FractalsContentWrapper>
          {this.props.fractals.map(fractal => (
            <FractalItem key={fractal.id} to={`/create/tree/${fractal.id}`}>{fractal.title}</FractalItem>
          ))}
        </FractalsContentWrapper>
      </ProfileComponentWrapper>
    );
  }
}

export default ProfileComponent;
