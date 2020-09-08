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

const Header = ({liked, allPosts} ) => {
  return (
    <AppHeader>
      <h1>Dmitriy Volchenko</h1>
      <h2>{allPosts} записей, из них понравилось {liked}</h2>
    </AppHeader>
  )
}

export default Header;