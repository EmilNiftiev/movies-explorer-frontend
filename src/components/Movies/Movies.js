import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

const Movies = ({
  isLoggedIn,
  openSideMenu,
  setIsLoaderVisible,
  setTooltipState,
  movies,
  setMovies,
  setFoundMovies,
  foundMovies,
  isShortMovieChecked,
  setIsShortMovieChecked,
  savedMovies,
  setSavedMovies,
}) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} openSideMenu={openSideMenu} />
      <section className="movies">
        <SearchForm
          setIsLoaderVisible={setIsLoaderVisible}
          setTooltipState={setTooltipState}
          movies={movies}
          setMovies={setMovies}
          setFoundMovies={setFoundMovies}
          isShortMovieChecked={isShortMovieChecked}
          setIsShortMovieChecked={setIsShortMovieChecked}
        />
        <MoviesCardList
          foundMovies={foundMovies}
          setIsLoaderVisible={setIsLoaderVisible}
          isShortMovieChecked={isShortMovieChecked}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
        />
      </section>
      <Footer />
    </>
  );
};

export default Movies;
