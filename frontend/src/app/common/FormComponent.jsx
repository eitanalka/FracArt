import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 1rem;
  }
  margin: auto;
`;

const FormComponent = props => (
  <FormWrapper onSubmit={props.onSubmit}>
    {props.children}
  </FormWrapper>
);

export default FormComponent;
