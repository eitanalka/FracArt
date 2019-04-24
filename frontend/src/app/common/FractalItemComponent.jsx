import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FractalItemComponent = styled(Link)`
  align-items: center;
  background: ${props => props.theme.secondary};
  border-radius: 7px;
  color: white;
  display: flex;
  font-size: 3rem;
  height: 22rem;
  justify-content: center;
  margin-bottom: 3rem;
  padding: 1.5rem;
  text-decoration: none;
  width: 22rem;
  word-wrap: break-word;
  word-break: break-all;
  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 5px 1px rgba(255, 255, 255, 0.1); 
  }
`;

export default FractalItemComponent;
