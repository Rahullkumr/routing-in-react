import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Celebrity from "../pages/Celebrity";

function MyRoutes() {
  return (
    <>
      <Routes>
        {/* Basic routing */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/celebrity" element={<Celebrity />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
