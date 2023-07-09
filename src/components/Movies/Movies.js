import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

const Movies = () => {
  return (
    <>
      <Header />
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
      </section>
      <Footer />
    </>
  );
};

export default Movies;
