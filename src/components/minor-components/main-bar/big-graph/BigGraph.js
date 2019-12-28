import React from 'react';
import { BigGraphMain } from './BigGraphMain';
import { BigGraphSide } from './BigGraphSide';
export const BigGraph = () => (
  <div
    style={{
      backgroundColor: "white"
    }}
    className="m3 flex"
  >
    <BigGraphMain />
    <BigGraphSide />
  </div>
);
