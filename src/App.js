import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js/NavBar";
import Trainings from "./components/Trainings/Trainings";
import Kontakt from "./components/Kontakt/Kontakt";
import Asortyment from "./components/Asortyment/Asortyment";
import OverlayMenu from "./UI/OverlayMenu/OverlayMenu";
import MainPage from "./components/MainPage/MainPage";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Indywidualny from "./components/Treningi/Indywidualny";
import Posluszenstwo from "./components/Treningi/Posluszenstwo";
import Obedience_1 from "./components/Treningi/Obedience_1";
import SportowySzczeniak from "./components/Treningi/SportowySzczeniak";
import AboutMe from "./components/AboutMe/AboutMe";
import Wspolne from "./components/Treningi/Wspolne";
import Sukienki1 from "./components/Poducts/Sukienki/Sukienki1";
import ShopItem from "./ShopItem/ShopItem";
import SukienkiBezWzoru from "./ShopItem/SukienkiBezWzoru";
import SukienkZeWzorem from "./ShopItem/SukienkiZeWzorem";
import Szarpaki from "./components/Asortyment/Products/Szarpaki";
import SpodniczkiStandardowe from "./components/Asortyment/Products/SpodniczkiStandardowe";
import SpodniczkiDlaWysokichPsow from "./components/Asortyment/Products/SpodniczkiDlaWysokichPsow";
import Cennik from "./components/Cennik/Cennik";
import Test from "./components/Test/Test";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOverlayMenu = () => setMenuOpen((prev) => !prev);

  const trainingTitles = [
    { title: "Trening Indywidualny", slug: "treningi/trening-indywidualny" },
    { title: "Posłuszeństwo z el. obedience", slug: "treningi/posluszenstwo-el-obd" },
    { title: "Obedience 1", slug: "treningi/obedience-1" },
    { title: "Sportowy szczeniak", slug: "treningi/sportowy-szczeniak" },
    { title: "Treningi wspólne", slug: "treningi/treningi-wspolne" },
  ];

  const itemTitles = [
    { title: "Szarpaki", slug: "/asortyment/szarpaki/" },
    {
      title: "Spódniczki standardowe",
      slug: "/asortyment/spodniczki_standardowe",
    },
    {
      title: "Spódniczki dla wysokich psow",
      slug: "/asortyment/spodniczki_dla_wysokich_psow",
    },
  ];

  return (
    <>
      <div className="app-div">
        <Router>
          {menuOpen && <OverlayMenu callback={handleOverlayMenu} />}
          <NavBar
            handleOverlayMenu={handleOverlayMenu}
            trainingTitles={trainingTitles}
            itemTitles={itemTitles}
          />
          <div className="apps-wrapper">
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route exact path="/treningi" element={<Trainings />} />
              <Route exact path="/asortyment" element={<Asortyment />} />
              <Route exact path="/kalendarz" element={<Events />} />
              <Route exact path="/kontakt" element={<Kontakt />} />
              <Route exact path="/omnie" element={<AboutMe />} />
              <Route path="/treningi/trening-indywidualny" element={<Indywidualny />} />
              <Route path="/treningi/posluszenstwo-el-obd" element={<Posluszenstwo />} />
              <Route path="/treningi/obedience-1" element={<Obedience_1 />} />
              <Route path="/treningi/sportowy-szczeniak" element={<SportowySzczeniak />} />
              <Route path="/treningi/treningi-wspolne" element={<Wspolne />} />
              <Route path="/asortyment/szarpaki/" element={<Szarpaki />} />
              <Route path="/asortyment/spodniczki_standardowe" element={<SpodniczkiStandardowe />} />
              <Route path="/asortyment/spodniczki_dla_wysokich_psow" element={<SpodniczkiDlaWysokichPsow />} />
              <Route exact path="/cennik" element={<Cennik />} />
              <Route exact path="/test" element={<Test />} />
            </Routes>
          </div>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
