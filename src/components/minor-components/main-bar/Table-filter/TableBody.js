import React from 'react';
import { TableRow } from './TableRow';
export const TableBody = () => (
  <div id="filtered-content">
    <TableRow status="reconciled" />
    <TableRow status="pending" />
    <TableRow status="reconciled" />
    <TableRow status="reconciled" />
    <TableRow status="pending" />
    <TableRow status="un-reconciled" />
    <TableRow status="reconciled" />
    <TableRow status="un-reconciled" />
    <TableRow status="pending" />
  </div>
);
