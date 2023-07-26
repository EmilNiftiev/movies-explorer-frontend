import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import TooltipPopup from "../TooltipPopup/TooltipPopup";
import mainApi from "../../utils/MainApi";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedIn") || false);
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
  const [movies, setMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  // ------------------- Состояние чекбокса ---------------------------
  // Сразу парсим, чтобы получать не строку, а булево значение
  const [isShortMovieChecked, setIsShortMovieChecked] = useState(
    JSON.parse(localStorage.getItem("checkboxState")) || false
  );
  // ------------------- Состояние тултип-попапа ----------------------
  const [tooltipState, setTooltipState] = useState({
    isVisible: false,
    isSuccessful: false,
    text: "",
  });
  // ------------------------------------------------------------------
  const navigate = useNavigate();

  const handleLogin = () => {
    checkToken();
    setIsLoggedIn(true);
    localStorage.setItem("loggedIn", true);
    navigate("/movies");
  };
  const logOut = () => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("loggedIn");
    // localStorage.removeItem("foundedMovies");
    // localStorage.removeItem("searchInputValue");
    // localStorage.removeItem("checkboxState");
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi.currentToken = token;
      mainApi
        .checkToken(token)
        .then((res) => {
          if (!res.message) {
            setIsLoaderVisible(true);
            setCurrentUser(res);
            setIsLoggedIn(true);
            // После успешной проверки токена делаем запрос на получение
            // фильмов (загружаем сохраненные фильмы)
            mainApi.getMovies().then((movies) => {
              setSavedMovies(movies.reverse());
            });
          }
        })
        .catch((res) => console.log(res))
        .finally(() => {
          setIsLoaderVisible(false);
        });
      // Если в локальном хранилище уже есть найденные фильмы, отображаем их
      if (localStorage.getItem("foundedMovies")) {
        setFoundMovies(JSON.parse(localStorage.getItem("foundedMovies")) || "[]");
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <section className="app">
        <Preloader isLoaderVisible={isLoaderVisible} />
        <TooltipPopup tooltipState={tooltipState} setTooltipState={setTooltipState} />
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
            element={
              <Login
                setIsLoaderVisible={setIsLoaderVisible}
                handleLogin={handleLogin}
                setTooltipState={setTooltipState}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                setIsLoaderVisible={setIsLoaderVisible}
                handleLogin={handleLogin}
                setTooltipState={setTooltipState}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isLoggedIn={isLoggedIn}
                openSideMenu={openSideMenu}
                setIsLoaderVisible={setIsLoaderVisible}
                setTooltipState={setTooltipState}
                movies={movies}
                setMovies={setMovies}
                foundMovies={foundMovies}
                setFoundMovies={setFoundMovies}
                isShortMovieChecked={isShortMovieChecked}
                setIsShortMovieChecked={setIsShortMovieChecked}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
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
                setTooltipState={setTooltipState}
                setIsLoaderVisible={setIsLoaderVisible}
                isShortMovieChecked={isShortMovieChecked}
                setIsShortMovieChecked={setIsShortMovieChecked}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                foundMovies={foundMovies}
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
                setTooltipState={setTooltipState}
                logOut={logOut}
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
