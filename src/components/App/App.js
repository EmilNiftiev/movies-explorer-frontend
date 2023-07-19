import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import SideMenu from "../SideMenu/SideMenu";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";

const App = () => {
  const [isLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
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
    <CurrentUserContext.Provider value={currentUser}>
      <Preloader isLoaderVisible={isLoaderVisible} />
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
            path="/signin"
            element={<Login setIsLoaderVisible={setIsLoaderVisible} />}
          />
          <Route
            path="/signup"
            element={<Register setIsLoaderVisible={setIsLoaderVisible} />}
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isLoggedIn={isLoggedIn}
                openSideMenu={openSideMenu}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                isLoggedIn={isLoggedIn}
                openSideMenu={openSideMenu}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                isLoggedIn={isLoggedIn}
                openSideMenu={openSideMenu}
                setCurrentUser={setCurrentUser}
                setIsLoaderVisible={setIsLoaderVisible}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </section>
    </CurrentUserContext.Provider>
  );
};

export default App;
