// import Loading from "./pages/Loading";
// import PageWish from "./pages/pagewish/PageWish";
// import Home from "./pages/Home";
import "./App.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import PageError from "./pages/pageError/PageError";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import PageWish from "./pages/pagewish/PageWish";
import PageFilm from "./pages/carousel/PageFilm";
import PageMask from "./pages/pagesMask/PageMask";
import TransitionAccueil from "./components/transitionAccueil/TransitionAccueil";
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line import/no-unresolved
import Footer from "./components/footer/Footer";

function App() {
  const [changeGenre, setChangeGenre] = useState("");
  const [changeGenre2, setChangeGenre2] = useState("");
  const [genres, setGenre] = useState([]);
  const [loader, setLoader] = useState(true);

  // useEffect du TransitionAccueil loader
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
    return clearTimeout();
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=b57a315f37e6b92bd78f45a87f99afa6&language=fr-FR"
      )
      .then((res) => {
        setGenre(res.data.genres);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return loader ? (
    <TransitionAccueil />
  ) : (
    <div className="App">
      <BrowserRouter>
        <Navbar
          setChangeGenre={setChangeGenre}
          setChangeGenre2={setChangeGenre2}
          genres={genres}
          changeGenre2={changeGenre2}
        />

        <Routes>
          <Route path="/" element={<PageMask />} />
          <Route
            path="/pagewish"
            element={
              <PageWish
                setChangeGenre2={setChangeGenre2}
                setChangeGenre={setChangeGenre}
                changeGenre2={changeGenre2}
                genres={genres}
                setGenre={setGenre}
              />
            }
          />
          <Route
            path="/pagewish/pagefilm"
            element={
              <PageFilm
                changeGenre={changeGenre}
                changeGenre2={changeGenre2}
                setChangeGenre2={setChangeGenre2}
                setChangeGenre={setChangeGenre}
                genres={genres}
                setGenre={setGenre}
              />
            }
          />
          <Route path="/banner" element={<Banner />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
