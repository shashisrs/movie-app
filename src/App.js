import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/About";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Details from "./pages/Details";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
