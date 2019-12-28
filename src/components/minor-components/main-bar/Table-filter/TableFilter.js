import React from 'react';
import { TableFilterFirstDiv } from './TableFilterFirstDiv';
import { TableFilterSecondDiv } from './TableFilterSecondDiv';
import { TableFilterThirdDiv } from './TableFilterThirdDiv';



export const TableFilter = () => (
  <div className="mr3 ml3 mb3 table-filter__div">
    <TableFilterFirstDiv />
    <TableFilterSecondDiv />
    <TableFilterThirdDiv />
  </div>
);
