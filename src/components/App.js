import React from 'react';
import TopNav from './major-components/TopNav';
import { SideBar } from './major-components/SideBar';
import { MainBar } from './major-components/MainBar';

const App = () => (
  <div>
    <TopNav />
    <section className="flex">
      <SideBar />
      <MainBar />
    </section>
  </div>
)

export default App;