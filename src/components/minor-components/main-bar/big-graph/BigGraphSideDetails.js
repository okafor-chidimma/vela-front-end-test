import React from 'react';
import { BigGraphSideDetailsItem } from './BigGraphSideDetailsItem';

export const BigGraphSideDetails = ({ menuDets }) => (
  <div id="details-component">
    {
      menuDets.map(({ title, figure }, index) => (
        <BigGraphSideDetailsItem title={title} figure={figure} key={index++} />
      ))
    }
  </div>
);
