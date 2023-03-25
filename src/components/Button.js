import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: ${props => props.backgroundColor};
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
