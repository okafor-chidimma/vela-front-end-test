import React from 'react';
import Search from '../../../../assets/navbar/searchIcon.svg';
export default () => (
  <div className="center-content">
    <h2>
      <Search />
      <input type="text" placeholder="Search..." className="tiny-font normal-weight-font nav-bar__input" />
    </h2>
  </div>
);
