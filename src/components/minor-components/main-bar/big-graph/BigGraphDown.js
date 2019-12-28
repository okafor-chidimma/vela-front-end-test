import React from 'react';
import bigGraph from '../../../../../assets/mainbar/big-graph/bigGraph.jpg';
import { MonthBigGraph } from './MonthBigGraph';
export const BigGraphDown = () => (
  <div
    style={{
      backgroundImage: `url(${bigGraph})`
    }}
    className="big-graph__image-grid"
  >
    <MonthBigGraph month="Jan" />
    <MonthBigGraph month="Feb" />
    <MonthBigGraph month="Mar" />
    <MonthBigGraph month="Apr" />
    <MonthBigGraph month="May" />
    <MonthBigGraph month="Jun" />
  </div>
);
