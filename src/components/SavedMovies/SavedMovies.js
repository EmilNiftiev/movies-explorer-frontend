import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useState } from "react";

const SavedMovies = ({
  isLoggedIn,
  openSideMenu,
  setIsLoaderVisible,
  setTooltipState,
  foundMovies,
  isShortMovieChecked,
  setIsShortMovieChecked,
  savedMovies,
  setSavedMovies,
}) => {
  const [searchSavedMovies, setSearchSavedMovies] = useState("");

  // Получить ключевую фразу для поиска
  const getSearchSavedMovies = (text) => {
    setSearchSavedMovies(text);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} openSideMenu={openSideMenu} />
      <section className="saved-movies">
        <SearchForm
          setTooltipState={setTooltipState}
          setIsLoaderVisible={setIsLoaderVisible}
          isShortMovieChecked={isShortMovieChecked}
          setIsShortMovieChecked={setIsShortMovieChecked}
          location={"saved"}
          getSearchSavedMovies={getSearchSavedMovies}
        />
        <MoviesCardList
          foundMovies={foundMovies}
          isShortMovieChecked={isShortMovieChecked}
          setIsLoaderVisible={setIsLoaderVisible}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          searchSavedMovies={searchSavedMovies}
        />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
