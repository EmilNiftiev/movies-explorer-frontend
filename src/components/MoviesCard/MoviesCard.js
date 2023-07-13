import "./MoviesCard.css";
import Button from "../Button/Button";
import moviesCover from "../../images/movies-card/33-slova-o-dizaine.png";
import { useLocation } from "react-router-dom";

const MoviesCard = () => {
  const location = useLocation();
  return (
    <section className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__name">
          33 слова о дизайне33 слова о дизайне33 слова о дизайне33 слова о
          дизайне
        </p>
        <div className="movies-card__duration">1ч 42м</div>
        {location.pathname === "/movies" ? (
          <Button text={""} type={"movies-like"} />
        ) : (
          <Button text={""} type={"delete-movie"} />
        )}
      </div>
      <a
        className="movies-card__link"
        rel="noreferrer"
        target="_blank"
        href="https://www.kinopoisk.ru/film/1302273/?utm_referrer=www.google.com"
      >
        <img
          className="movies-card__image"
          src={moviesCover}
          alt={"Изображение обложки фильма 33 слова о дизайне"}
        />
      </a>
    </section>
  );
};

export default MoviesCard;
