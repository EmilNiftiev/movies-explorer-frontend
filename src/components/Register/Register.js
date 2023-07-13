import "./Register.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="register">
      <Logo />
      <h3 className="register__title">Добро пожаловать!</h3>
      <form name="register" className="register__form">
        <fieldset className="register__form-fields">
          <div className="register__input-container">
            <label className="register__input-caption">Имя</label>
            <input
              type="text"
              className="register__form-input"
              name="name"
              id="name-input"
              placeholder="Введите Ваше имя"
              required
              minLength={2}
            />
          </div>
          <div className="register__input-container">
            <label className="register__input-caption">E-mail</label>
            <input
              type="email"
              name="email"
              className="register__form-input"
              id="email-input"
              placeholder="Укажите e-mail адрес"
              required
            />
          </div>
          <div className="register__input-container">
            <label className="register__input-caption">Пароль</label>
            <input
              type="password"
              name="password"
              className="register__form-input"
              id="password-input"
              placeholder="Введите пароль"
              required
              minLength={8}
            />
          </div>
        </fieldset>
        <Button
          text={"Зарегистрироваться"}
          type={"form-register"}
          buttonType="submit"
        />
      </form>
      <div className="register__link-container">
        <p className="register__link-text">Уже зарегистрированы?</p>
        <Link className="register__link" to="/signin">
          Войти
        </Link>
      </div>
    </section>
  );
};

export default Register;
