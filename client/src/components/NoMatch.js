import React from 'react';
import { Link, } from "react-router-dom";
import HeaderText from '../styles/HeaderText'
import StyledButton from '../styles/StyledButton'


const NoMatch = () => (
  <div style={styles.container}>
    <HeaderText fSize="lrg" >Oops!</HeaderText>
    <HeaderText fSize="med" >Nothing to see here.</HeaderText>
    <HeaderText fSize="sml">YOU FOUND A BROKEN LINK.</HeaderText>
    <Link to="/">
      <StyledButton>Home</StyledButton>
    </Link>
  </div>
)

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  header: {
    fontSize: "50px",
  },
};

export default NoMatch;