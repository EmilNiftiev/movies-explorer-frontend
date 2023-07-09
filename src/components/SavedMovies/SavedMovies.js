import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

const SavedMovies = () => {
  return (
    <>
      <Header />
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
