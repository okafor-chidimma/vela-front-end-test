import React from 'react';
import droppydown from '../../../../../assets/mainbar/filtered-content/dropdown.png';
export const TableFilterFirstDiv = () => (
  <div className="flex flex-start align-center">
    <div className="mr2">
      <p>Showing</p>
    </div>
    <div className="mr2">
      <select
        disabled
        className="table-filter__select default-select pr1"
        style={{
          backgroundImage: `url(${droppydown})`
        }}
      >
        <option>20</option>
      </select>
    </div>
    <div>
      <p>Out of 500 Payments</p>
    </div>
  </div>
);
