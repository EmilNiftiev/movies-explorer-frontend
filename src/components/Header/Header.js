import "./Header.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";
import BurgerMenuButton from "../BurgerMenuBtn/BurgerMenuBtn";

const Header = ({ openSideMenu, isLoggedIn }) => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Logo />
      </div>
      {isLoggedIn && (
        <div className="header__nav-visibility">
          <Navigation navStyle={"header-menu"} />
        </div>
      )}
      <nav className="header__menu">
        {!isLoggedIn && (
          <Link to="/signup" className="header__link">
            Регистрация
          </Link>
        )}
        {!isLoggedIn ? (
          <Button text={"Войти"} type={"login"} />
        ) : (
          <div className="header__nav-visibility">
            <Button type={"account"} text={"Аккаунт"} />
          </div>
        )}
        {isLoggedIn && <BurgerMenuButton openSideMenu={openSideMenu} />}
      </nav>
    </header>
  );
};

export default Header;
