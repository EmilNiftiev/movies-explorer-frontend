import "./Header.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Logo />
      </div>
      <nav>
        <Link to="/movies" className="header__nav-links-item">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header__nav-links-item">
          Сохраненные фильмы
        </Link>
      </nav>
      <nav className="header__menu">
        <Link to="/signup" className="header__link">
          Регистрация
        </Link>
        <Button text={"Войти"} type={"login"} />
      </nav>
    </header>
  );
};

export default Header;
