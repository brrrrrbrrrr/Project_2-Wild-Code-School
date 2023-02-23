// import Loading from "./pages/Loading";
// import PageWish from "./pages/pagewish/PageWish";
// import Home from "./pages/Home";
import "./App.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Banner from "./components/banner/Banner";
import PageWish from "./pages/pagewish/PageWish";
import PageFilm from "./pages/carousel/PageFilm";

// eslint-disable-next-line no-unused-vars
import Body from "./components/footer/Body";
import Footer from "./components/footer/Footer";

function App() {
  const [changeGenre, setChangeGenre] = useState("");
  const [changeGenre2, setChangeGenre2] = useState("");

  return (
    <div className="App">
      <Body />
      <Footer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PageWish
                setChangeGenre2={setChangeGenre2}
                setChangeGenre={setChangeGenre}
                changeGenre2={changeGenre2}
              />
            }
          />
          <Route
            path="/pagefilm"
            element={
              <PageFilm
                changeGenre={changeGenre}
                changeGenre2={changeGenre2}
                setChangeGenre2={setChangeGenre2}
                setChangeGenre={setChangeGenre}
              />
            }
          />
          <Route path="/banner" element={<Banner />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Body />
    </div>
  );
}

export default App;
