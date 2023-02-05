import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../component";

const Layout = () => {
  return (
    <div className="bg-gray-light vh-100">
      <Header />
      <Outlet />
    </div>
  );
};
export default Layout;
