import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import CatalogPage from "../pages/CatalogPage";
import Details from "../pages/Details/Details";


function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
