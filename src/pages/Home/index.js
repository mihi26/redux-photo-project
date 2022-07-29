import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Banner from 'components/Banner';
import './style.scss';
import HeroHeader from 'components/HeroHeader';

function Home() {
  return (
    <div>
      <div className="photo-app">
        <Header />
        <HeroHeader />
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
