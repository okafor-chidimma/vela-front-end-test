import React from 'react';
import { StatsItem } from './StatsItem';
export const StatsMenu = () => (
  <div className="flex space-around mt4">
    <StatsItem figure="2,342" title="Daily Transaction Volume" />
    <StatsItem figure="₦4,000,000" title="Daily Transaction Value" />
    <StatsItem figure="452,000" title="Total Transaction Volume" />
    <StatsItem figure="₦4,000,000" title="Total Transaction Value" />
  </div>
);
