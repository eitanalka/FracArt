import React from 'react';
import styled from 'styled-components';

const FormInputWrapper = styled.input`
  border: 0.1rem solid #cacccd;
  border-radius: 5px;
  height: 5rem;
  font-size: 2rem;
  font-weight: 300;
  max-width: 30rem;
  padding: 1rem;
`;

const FormInputComponent = props => (
  <FormInputWrapper 
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    required={props.required}
  />
);

export default FormInputComponent;
