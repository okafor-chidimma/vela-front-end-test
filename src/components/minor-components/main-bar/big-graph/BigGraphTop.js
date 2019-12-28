import React from 'react';
import rightButton from '../../../../../assets/mainbar/big-graph/rightbutton.png';
import dropdown from '../../../../../assets/mainbar/big-graph/dropdown.png';
import leftButton from '../../../../../assets/mainbar/big-graph/leftbutton.png';
import { BigGraphButton } from './BigGraphButton';
export const BigGraphTop = () => (
  <div className="flex mr2 ml2 mb2 mt2">
    <div className="flex flex-center align-center mr6">
      <h2 className="mr6 ml0 mt0 mb0 big-graph__h2">Today: 5, Aug 2018</h2>
    </div>
    <div className="flex pl1 pr1 pt1 pb1">
      <div className="mt0 mb0 ml4 mr4">
        <select
          className="big-graph__select default-select tiny-font"
          style={{
            backgroundImage: `url(${dropdown}) `
          }}
          disabled
        >
          <option>1 Jan - 1 Jun</option>
        </select>
      </div>
      <div className="flex">
        <BigGraphButton src={leftButton} />
        <BigGraphButton src={rightButton} />
      </div>
    </div>
  </div>
);
