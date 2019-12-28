import React from 'react';
import { BigGraphSideItem } from './BigGraphSideItem';
import { bigGraphSideMenu } from "../../../fixtures/bigGraphSideMenu";
export const BigGraphSide = () => (<div id="border-bottom-component">
  <BigGraphSideItem title="Orders" menuDets={bigGraphSideMenu.orders} />
  <BigGraphSideItem title="Payments" menuDets={bigGraphSideMenu.payments} />
</div>);
