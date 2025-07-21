import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactPage, ExperiencePage, HomePage, ProjectsPage } from "../pages";
import MainHeader from "../components/shared/MainHeader";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/experience" element={<ExperiencePage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
