import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

const Movies = ({
  isLoggedIn,
  openSideMenu,
  isLoaderVisible,
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
  isMobile,
  isTablet,
}) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} openSideMenu={openSideMenu} />
      <section className="movies">
        <SearchForm
          isLoaderVisible={isLoaderVisible}
          setIsLoaderVisible={setIsLoaderVisible}
          setTooltipState={setTooltipState}
          movies={movies}
          setMovies={setMovies}
          setFoundMovies={setFoundMovies}
          isShortMovieChecked={isShortMovieChecked}
          setIsShortMovieChecked={setIsShortMovieChecked}
          location={"all-movies"}
        />
        <MoviesCardList
          foundMovies={foundMovies}
          setIsLoaderVisible={setIsLoaderVisible}
          isShortMovieChecked={isShortMovieChecked}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      </section>
      <Footer />
    </>
  );
};

export default Movies;
