import styled from 'styled-components'

const StyledButton = styled.div`
  display: flex;
  background: blueviolet;
  color: white;
  padding: 15px 25px;
  justify-content: center;
  transition: background 0.2s ease;
  cursor: pointer;
  border-radius: 25px;
  width: 130px;
  margin: 50px;
  text-align: center;
  
  &:hover {
    background: teal;
    transition: background 0.2s ease;
  }
`;

export default StyledButton