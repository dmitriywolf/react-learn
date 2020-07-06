import React from 'react';

import './search-panel.css';

//Коспонент поисковая панель
const SearchPanel = () => {
    return (
      <input type="text"
              className="form-control search-input"
              placeholder="type to search"/>
    );
  };

  export default SearchPanel;