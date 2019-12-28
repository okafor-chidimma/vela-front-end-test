import React from 'react';
import droppydown from '../../../../../assets/mainbar/filtered-content/dropdown.png';
export const TableFilterThirdDiv = () => (
  <div className="flex space-around align-center">
    <div>
      <p>Show</p>
    </div>
    <div>
      <select
        className="table-filter__select--select off-white-border default-select"
        style={{
          backgroundImage: `url(${droppydown})`
        }}
      >
        <option>All</option>
        <option>Reconciled</option>
        <option>Un-reconciled</option>
        <option>Settled</option>
        <option>Un-settled</option>
      </select>
    </div>
  </div>
);
