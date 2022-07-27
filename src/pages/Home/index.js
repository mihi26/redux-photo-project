import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "components/Header";
import Banner from "components/Banner";
import "./style.scss";

function Home() {
  return (
    <div>
      <div className="photo-app">
        <Header />
        <Banner title="Your awesome photos" />
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
