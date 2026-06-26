import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage, HomePage, ProjectsPage, NotFoundPage } from "../pages";
import MainLayout from "../components/layout/MainLayout";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
