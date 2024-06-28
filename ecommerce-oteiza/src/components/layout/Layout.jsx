import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/navBar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
