import styled from 'styled-components';

const fontSize = (size) => {
  switch(size) {
    case 'lrg':
      return '4rem';
    case 'med':
      return '3rem';
    case 'sml':
      return '1rem';
    default:
      return '2rem';
  }
}

export default styled.h1`
  font-family: lobster;
  color: black !important;
  text-align: center;
  font-size: ${props => fontSize(props.fSize)} !important;`

  
