import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";

const MoviesCardList = () => {
  const location = useLocation();

  return (
    <section>
      {location.pathname === "/movies" && (
        <ul className="movies-card-list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
      )}
      {location.pathname === "/saved-movies" && (
        <ul className="movies-card-list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
      )}
      {location.pathname === "/movies" && <Button text={"Ещё"} type={"more"} />}
    </section>
  );
};

export default MoviesCardList;
