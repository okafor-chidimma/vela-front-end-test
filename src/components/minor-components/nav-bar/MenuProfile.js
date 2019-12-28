import React from 'react';
import TopNavMenu from './TopNavMenu';
import Notification from './Notification';
import MyProfile from './MyProfile';
export default () => (
  <div className="flex space-evenly nav-bar__div">
    <TopNavMenu name="Support" />
    <TopNavMenu name="FAQ" />
    <Notification />
    <MyProfile />
  </div>
);
