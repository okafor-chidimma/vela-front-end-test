import React from 'react';
import SearchFilter from '../../../../../assets/mainbar/after-payments-div/Search.svg';
export const TableFilterSecondDiv = () => (
  <div className="pr6 mr6 pt1">
    <div className="flex align-center table-filter__div--div pr1">
      <SearchFilter />
      <input type="text" placeholder="Search Placements" className="no-border transparent-background" />
    </div>
  </div>
);
