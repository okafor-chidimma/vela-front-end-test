import React from 'react';
export const BigGraphSideDetailsItem = ({ title, figure }) => (
  <p>
    {title}: &nbsp;
    <span className="bold-font">{figure}</span>
  </p>
);
