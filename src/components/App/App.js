import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import SideMenu from "../SideMenu/SideMenu";

const App = () => {
  const [isLoggedIn] = useState(false);
  // ------------------- Управление боковым меню -------------------
  const [isSideMenu, setIsSideMenu] = useState(false);

  const openSideMenu = () => {
    setIsSideMenu(true);
    document.addEventListener("keydown", handleEscClick);
  };
  const closeSideMenu = () => {
    setIsSideMenu(false);
    document.removeEventListener("keydown", handleEscClick);
  };
  const handleEscClick = (evt) => {
    if (evt.key === "Escape") {
      closeSideMenu();
    }
  };
  // ------------------------------------------------------------------
  return (
    <section className="app">
      <SideMenu
        isLoggedIn={isLoggedIn}
        isSideMenu={isSideMenu}
        closeSideMenu={closeSideMenu}
      />
      <Routes>
        <Route
          path="/"
          element={<Main isLoggedIn={isLoggedIn} openSideMenu={openSideMenu} />}
        />
        <Route
          path="/movies"
          element={<Movies isLoggedIn={isLoggedIn} openSideMenu={openSideMenu} />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies isLoggedIn={isLoggedIn} openSideMenu={openSideMenu} />}
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/profile"
          element={<Profile isLoggedIn={isLoggedIn} openSideMenu={openSideMenu} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
};

export default App;
