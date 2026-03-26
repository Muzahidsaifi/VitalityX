import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Home from "../pages/Home";
import WhyUs from "../pages/WhyUs";
import Programs from "../pages/Programs";
import Services from "../pages/Services";
import Supplements from "../pages/Supplements";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import Portal from "../pages/Portal";
import CRM from "../pages/CRM";


export default function AppRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/supplements" element={<Supplements />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/crm" element={<CRM />} />
      </Routes>

      <Footer />
    </>
  );
}