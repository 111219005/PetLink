import { BrowserRouter, Routes, Route } from "react-router";
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Species from "./pages/Species";
import ScrollToTop from "./components/ScrollToTop";
import Intro from "./pages/Intro/Intro";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="introduction" element={<Intro />} />
              <Route path=":productSpecies" element={<Species />} />
              <Route path=":productSpecies/:productId" element={<Product />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
