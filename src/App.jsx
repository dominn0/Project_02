import "./App.css";
import "./assets/stylenew.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./Pages/beranda/Beranda";
import Profil from "./Pages/Profil";
import Navbar from "./Component/Navbar";
import Detail from "./Pages/Detail";
import Error from "./Pages/Error";
import { Footer } from "./Component/Footer";
import Product from "./Pages/product/Product";
import Negara from "./Pages/negara/Negara";
import Rincian from "./Pages/negara/Rincian";
import ThemeContext from "./assets/context/ThemeContext";
import { useState } from "react";

function App() {
  const theme = useState("light");

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/rincian" element={<Rincian />} />
          <Route path="/product" element={<Product />} />
          <Route path="/negara" element={<Negara />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
