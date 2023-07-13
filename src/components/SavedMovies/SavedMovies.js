import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

const SavedMovies = ({ isLoggedIn, openSideMenu }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} openSideMenu={openSideMenu} />
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
