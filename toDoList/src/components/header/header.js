import React from 'react';

// import "./header.css";

import styled from "styled-components";

const AppHeader = styled.div`
  display: flex
  align-items: flex-end;
  justify-content: space-between;
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