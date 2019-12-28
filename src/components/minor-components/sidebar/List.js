import React from 'react';
import { Lisitem } from './Lisitem';
export const List = ({ menu }) => (
  <div className="mt1 tiny-font">
    <ul className="p0">
      {
        menu.map(({ icon, name }, index) => {
          return <Lisitem icon={icon} name={name} key={index++} />
        })
      }
    </ul>
  </div>
);
