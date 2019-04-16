import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  justify-content: space-evenly;
  margin: auto;
  max-width: 80rem;
`;

const FractalTypeItem = styled(Link)`
  align-items: center;
  background: #191919;
  border-radius: 7px;
  color: white;
  display: flex;
  font-size: 3rem;
  height: 22rem;
  justify-content: center;
  text-decoration: none;
  width: 22rem;
  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 5px 1px rgba(255, 255, 255, 0.1); 
  }
`;

const CreateComponent = props => (
  <CreateWrapper>
    <CreateTitle>
      Select a Fractal Type
    </CreateTitle>
    <FractalTypeContentWrapper>
      <FractalTypeItem to="/create/tree">
        Tree
      </FractalTypeItem>
    </FractalTypeContentWrapper>
  </CreateWrapper>
);

export default CreateComponent;

