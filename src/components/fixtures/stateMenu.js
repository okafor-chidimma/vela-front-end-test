import React from 'react';
import Overview from '../../../assets/sidebar/main/overview.svg';
import AllOrders from '../../../assets/sidebar/orders/all-orders.svg';
import PendingOrders from '../../../assets/sidebar/orders/pending-orders.svg';
import ReconciledOrders from '../../../assets/sidebar/orders/reconciled-orders.svg';
import All from '../../../assets/sidebar/payments/all-payment.svg';
import Manual from '../../../assets/sidebar/payments/manual-payment.svg';
import Reconciled from '../../../assets/sidebar/payments/reconciled.svg';
import Unreconciled from '../../../assets/sidebar/payments/un-reconciled.svg';
import ProfilePicture from '../../../assets/sidebar/profile.svg';
export const stateMenu = {
  main: [
    {
      icon: <Overview />,
      name: 'Overview'
    }
  ],
  payments: [
    {
      icon: <All />,
      name: 'All Payments'
    },
    {
      icon: <Reconciled />,
      name: 'Reconciled Payments'
    },
    {
      icon: <Unreconciled />,
      name: 'Un-Reconciled Payments'
    },
    {
      icon: <Manual />,
      name: 'Manual Statements'
    }
  ],
  orders: [
    {
      icon: <AllOrders />,
      name: 'All Orders'
    },
    {
      icon: <PendingOrders />,
      name: 'Pending Orders'
    },
    {
      icon: <ReconciledOrders />,
      name: 'Reconciled Orders'
    }
  ],
  profile: [
    {
      icon: <ProfilePicture />,
      name: 'Merchant Profile'
    }
  ]
};
