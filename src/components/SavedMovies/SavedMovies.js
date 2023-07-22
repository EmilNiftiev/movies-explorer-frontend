import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

const SavedMovies = ({
  isLoggedIn,
  openSideMenu,
  setIsLoaderVisible,
  setTooltipState,
  foundMovies,
}) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} openSideMenu={openSideMenu} />
      <section className="saved-movies">
        <SearchForm
          setTooltipState={setTooltipState}
          setIsLoaderVisible={setIsLoaderVisible}
        />
        <MoviesCardList foundMovies={foundMovies} />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
