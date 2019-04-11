import React from 'react';
import styled from 'styled-components';

const FormErrorWrapper = styled.p`
  color: red;
  font-size: 2rem;
  font-style: italic;
  margin: 0 0 2.2rem 0;
  max-width: 50rem;
`;

const FormErrorComponent = props => (
  <FormErrorWrapper>
    {props.children}
  </FormErrorWrapper>
);

export default FormErrorComponent;
