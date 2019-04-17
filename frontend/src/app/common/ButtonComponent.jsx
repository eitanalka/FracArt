import styled from 'styled-components';

const ButtonComponent = styled.button`
  background: white;
  border-radius: 5px;
  color: ${props => props.theme.buttonColor}
  cursor: pointer;
  font-size: 2rem;
  padding: .5rem;
  width: 20rem;
  &:hover {
    background: #e8e8e8;
  }
`;

export default ButtonComponent;

export const ButtonSecondary = styled(ButtonComponent)`
  background: ${props => props.theme.secondary};
  border-color: #3a3a3a;
  color: white;
  &:hover {
    background: #3a3a3a;
  }
`;
