import React from 'react';
import { TableFooterButton } from './TableFooterButton';

export const TableFooter = () => (
  <div className="mt3 mr3 ml3 mb4 flex space-between align-center">
    <div>
      <p>Showing 1 to 10 of 500 entries</p>
    </div>
    <div>
      <TableFooterButton name="Previous" />
      <TableFooterButton name="1" />
      <TableFooterButton name="2" />
      <TableFooterButton name="Next" />
    </div>
  </div>
);
