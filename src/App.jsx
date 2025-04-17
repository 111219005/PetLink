import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Species from "./pages/Species";
import ScrollToTop from "./components/ScrollToTop";
import Intro from "./pages/Intro/Intro";
import SignIn from "./pages/SignIn/SignIn";
import LogIn from "./pages/LogIn/LogIn";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="introduction" element={<Intro />} />
        <Route path=":productSpecies" element={<Species />} />
        <Route path=":productSpecies/:productId" element={<Product />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="LogIn" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
