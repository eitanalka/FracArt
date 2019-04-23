import React from 'react';
import styled from 'styled-components';

import { FractalItem } from '../common';

const CreateWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100vw;
`;

const CreateTitle = styled.h1`
  font-size: 5rem;
  text-align: center;
`;

const FractalTypeContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-evenly;
  margin: auto;
  max-width: 80rem;
`;

const CreateComponent = () => (
  <CreateWrapper>
    <CreateTitle>
      Select a Fractal Type
    </CreateTitle>
    <FractalTypeContentWrapper>
      <FractalItem to="/create/tree">
        Tree
      </FractalItem>
    </FractalTypeContentWrapper>
  </CreateWrapper>
);

export default CreateComponent;

