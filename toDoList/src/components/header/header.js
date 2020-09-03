import React from 'react';

// import "./header.css";

import styled from "styled-components";

const AppHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    font-size: 26px;
  }

  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const Header = () => {
  return (
    <AppHeader>
      <h1>Dmitriy Volchenko</h1>
      <h2>5 записей, из них понравилось 0</h2>
    </AppHeader>
  )
}

export default Header;