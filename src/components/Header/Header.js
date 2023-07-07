import "./Header.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Logo />
      </div>
      <nav className="header__menu">
        <Link to="/signup" className="header__link">
          Регистрация
        </Link>
        <Button text={'Вход'} type={'login'} />
        {/* <button className="header__button header__button_type_login">
          Войти
        </button> */}
      </nav>
    </header>
  );
};

export default Header;
