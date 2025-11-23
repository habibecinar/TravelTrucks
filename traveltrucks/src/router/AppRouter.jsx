import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import CamperDetails from "../pages/CamperDetails/CamperDetails";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CamperDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
