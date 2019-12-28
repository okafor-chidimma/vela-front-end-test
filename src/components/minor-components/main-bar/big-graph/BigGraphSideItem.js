import React from 'react';
import { BigGraphSideDetails } from './BigGraphSideDetails';

export const BigGraphSideItem = ({ title, menuDets }) => (<div>
  <div className="mr2 mt2 mb2 ml2">
    <div>
      <h1 className="m0 normal-font">{title}</h1>
    </div>
    <div>
      <progress max="100" value="80" className="big-graph__progress-bar"></progress>
    </div>
    <BigGraphSideDetails menuDets={menuDets} />
  </div>
</div>);
