import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Celebrity from "../pages/Celebrity";
import Actor from "../pages/Actor";
import Actress from "../pages/Actress";
import PageNotFound from "../pages/PageNotFound";

function MyRoutes() {
  return (
    <>
      <Routes>
        {/* Basic routing */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Nested routing */}
        <Route path="/celebrity" element={<Celebrity />}>
          {/* <Route index element={<Actor/>} /> */}
          <Route path="actor" element={<Actor/>} />
          <Route path="actress" element={<Actress/>} />
        </Route>

        {/* Wildcard route for PageNotFound */}
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default MyRoutes;
