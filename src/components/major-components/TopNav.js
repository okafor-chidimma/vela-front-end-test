import React from 'react';
import LogoSearch from '../minor-components/nav-bar/LogoSearch';
import MenuProfile from '../minor-components/nav-bar/MenuProfile';
const TopNav = () => (
  <nav className="flex nav-bar">
    <LogoSearch />
    <MenuProfile/>
  </nav>
);
export default TopNav;