import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import FranchisePage from "./pages/FranchisePage";
import LocationsPage from "./pages/LocationsPage";
import ContactPage from "./pages/ContactPage";
import FranchiseApplyPage from "./pages/FranchiseApplyPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/franchise/apply" element={<FranchiseApplyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;