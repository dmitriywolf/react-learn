import React from 'react';

import './search-box.css';

const SearchBox = () => {
  return (
    <input type="text"
              className="form-control search-input"
              placeholder="type to search" />
  );
};

export default SearchBox;
