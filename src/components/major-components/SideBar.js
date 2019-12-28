import React from 'react';
import { List } from '../minor-components/sidebar/List';
import { SideTransferButton } from '../minor-components/sidebar/SideTransferButton';
import { SubMenu } from '../minor-components/sidebar/SubMenu';
import { stateMenu } from '../fixtures/stateMenu';

export const SideBar = () => (
<div className="section__side-bar mt5">
  <div>
    <SideTransferButton />
    <SubMenu title="Main" menu={stateMenu.main} />
    <SubMenu title="Payments" menu={stateMenu.payments} />
    <SubMenu title="Orders" menu={stateMenu.orders} />
    <List menu={stateMenu.profile}/>
  </div>

</div>);
