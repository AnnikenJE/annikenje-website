import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactPage, AboutMePage, HomePage, ProjectsPage } from "../pages";
import MainHeader from "../components/shared/MainHeader";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about-me" element={<AboutMePage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
