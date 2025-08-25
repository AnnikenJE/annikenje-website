import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage, HomePage, ProjectsPage } from "../pages";
import MainHeader from "../components/layout/MainHeader";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
