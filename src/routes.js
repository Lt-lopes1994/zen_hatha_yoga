import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs/index.jsx";
import Classes from "./pages/Classes/index.jsx";


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobreNos" element={<AboutUs />} />
      <Route path="/aulas" element={<Classes />} />
    </Routes>
  );
}

export default MainRoutes;