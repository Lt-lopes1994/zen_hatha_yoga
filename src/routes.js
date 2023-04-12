import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs/index.jsx";


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobreNos" element={<AboutUs />} />
    </Routes>
  );
}

export default MainRoutes;