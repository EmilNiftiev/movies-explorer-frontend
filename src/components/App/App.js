import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useMediaQuery } from "react-responsive";
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
import { TABLET_WIDTH, MOBILE_WIDTH } from "../../utils/constants";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedIn") || false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  // ------------------- Определяем тип устройства -------------------
  const isTablet = useMediaQuery({ query: TABLET_WIDTH });
  const isMobile = useMediaQuery({ query: MOBILE_WIDTH });

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
    localStorage.clear();
    setMovies([]);
    setFoundMovies([]);
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
        .catch((res) => {
          console.log(res);
          // Если токен не прошел проверку, меняем стейт логина
          // и переводим пользователя на страницу входа
          setIsLoggedIn(false);
          localStorage.clear(); // Чистим хранилище
          navigate("/signin");
        })
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
              isLoggedIn ? (
                <Navigate to="/" />
              ) : (
                <Login
                  isLoaderVisible={isLoaderVisible}
                  setIsLoaderVisible={setIsLoaderVisible}
                  handleLogin={handleLogin}
                  setTooltipState={setTooltipState}
                />
              )
            }
          />
          <Route
            path="/signup"
            element={
              isLoggedIn ? (
                <Navigate to="/" />
              ) : (
                <Register
                  isLoaderVisible={isLoaderVisible}
                  setIsLoaderVisible={setIsLoaderVisible}
                  handleLogin={handleLogin}
                  setTooltipState={setTooltipState}
                />
              )
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isLoggedIn={isLoggedIn}
                openSideMenu={openSideMenu}
                isLoaderVisible={isLoaderVisible}
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
                isMobile={isMobile}
                isTablet={isTablet}
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
                isLoaderVisible={isLoaderVisible}
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
