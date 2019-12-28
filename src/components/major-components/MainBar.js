import React from 'react';
import { StatsMenu } from '../minor-components/main-bar/stats/StatsMenu';
import { BigGraph } from '../minor-components/main-bar/big-graph/BigGraph';
import { PaymentTitle } from '../minor-components/main-bar/payments/PaymentTitle';
import { TableFilter } from '../minor-components/main-bar/Table-filter/TableFilter';
import { Table } from '../minor-components/main-bar/Table-filter/Table';
import { TableFooter } from '../minor-components/main-bar/Table-filter/TableFooter';
export const MainBar = () => (<div className="section__main-bar mt5">
  <StatsMenu />
  <BigGraph />
  <PaymentTitle />
  <TableFilter />
  <Table />
  <TableFooter />
</div>);
