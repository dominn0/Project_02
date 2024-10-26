import "./App.css";
import "./assets/stylenew.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Error from "./Pages/Error";
import { Footer } from "./Component/Footer";
import ThemeContext from "./assets/context/ThemeContext";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Beranda from "./Pages/beranda/Beranda";
import Detail from "./Pages/Detail";
import RatingMovies from "./Pages/RatingMovies";

function App() {
  const theme = useState("light");

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<Error />} />
            <Route path="/ratingmovies" element={<RatingMovies />} />
          </Routes>
        </Provider>
      </ThemeContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
