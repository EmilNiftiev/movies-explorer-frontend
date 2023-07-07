import "./Movies.css";
import Header from "../Header/Header";
// import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

const Movies = () => {
  return (
    <>
      <Header />
      {/* <SearchForm /> */}
      <section className="movies"></section>
      <Footer />
    </>
  );
};

export default Movies;
