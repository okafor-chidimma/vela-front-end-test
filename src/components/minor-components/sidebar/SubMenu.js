import React from 'react';
import { List } from './List';
export const SubMenu = ({ title, menu }) => (
  <div className="tiny-font mt4 side-bar__div">
    <div className="ml4">
      <h2 className="normal-weight-font normal-font">{title}</h2>
    </div>
    <List menu={menu}/>
  </div>
);
