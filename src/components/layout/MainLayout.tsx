import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import ScrollToTop from "./ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default MainLayout;
