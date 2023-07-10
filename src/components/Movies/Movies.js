import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

const Movies = ({ isLoggedIn, openSideMenu, isTablet }) => {
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        openSideMenu={openSideMenu}
        isTablet={isTablet}
      />
      <section className="movies">
        <SearchForm />
        <MoviesCardList isTablet={isTablet} />
      </section>
      <Footer />
    </>
  );
};

export default Movies;
