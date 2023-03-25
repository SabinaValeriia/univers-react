import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${props => props.fontSize}px;
  font-weight: bold;
  color: ${props => props.color};
`;

export default Heading;
