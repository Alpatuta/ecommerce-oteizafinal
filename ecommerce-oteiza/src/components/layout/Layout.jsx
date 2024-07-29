import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/navBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
