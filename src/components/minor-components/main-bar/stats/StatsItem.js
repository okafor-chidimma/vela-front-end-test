import React from 'react';
import StatsGraph from '../../../../../assets/mainbar/stats/stats.svg';


export const StatsItem = ({ title, figure }) => (<div className="flex pt1 pb1 pr1 pl1 white-background">
  <div className="mr1">
    <p className="mb0 tiny-font main-bar__p">{title}</p>
    <h2 className="mt0 normal-weight-font">{figure}</h2>
  </div>
  <div className="flex flex-center align-center">
    <StatsGraph />
  </div>
</div>);
