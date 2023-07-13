import "./Login.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <Logo />
      <h3 className="login__title">Рады видеть!</h3>
      <form name="login" className="login__form">
        <fieldset className="login__form-fields">
          <div className="login__input-container">
            <label className="login__input-caption">E-mail</label>
            <input
              type="email"
              className="login__form-input"
              name="email"
              id="email-input"
              placeholder="Укажите e-mail адрес"
              required
            />
          </div>
          <div className="login__input-container">
            <label className="login__input-caption">Пароль</label>
            <input
              type="password"
              className="login__form-input"
              name="password"
              id="password-input"
              placeholder="Введите пароль"
              required
              minLength={8}
            />
          </div>
        </fieldset>
        <Button text={"Войти"} type={"form-login"} buttonType="submit" />
      </form>
      <div className="login__link-container">
        <p className="login__link-text">Еще не зарегистрированы?</p>
        <Link className="login__link" to="/signup">
          Регистрация
        </Link>
      </div>
    </section>
  );
};

export default Login;
