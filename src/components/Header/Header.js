import "./Header.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Logo />
      </div>
      <Navigation navStyle={"header-menu"} />
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
