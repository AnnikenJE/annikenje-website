import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";

const MainLayout = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default MainLayout;
