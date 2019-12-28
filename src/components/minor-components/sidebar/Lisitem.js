import React from 'react';

export const Lisitem = ({ icon, name }) => {
  return (
    <li className="side-bar__li pl4 pr1 pb1 pt1 flex">
      {icon}
      <span>{name}</span>
    </li>
  )

};
