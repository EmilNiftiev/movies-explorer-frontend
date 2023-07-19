import "./Login.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { emailRegex, passwordMinLength } from "../../utils/constants";
import mainApi from "../../utils/MainApi";

const Login = ({ setIsLoaderVisible, handleLogin, setTooltipState }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    getValues,
  } = useForm({ mode: "onChange" });
  const onSumbit = () => {
    setIsLoaderVisible(true);
    // console.log(JSON.stringify(data.email));
    mainApi
      .login(getValues("password"), getValues("email"))
      .then((data) => {
        setTooltipState({
          isVisible: true,
          isSuccessful: true,
          text: "Авторизация прошла успешно!",
        });
        localStorage.setItem("token", data.token);
        handleLogin();
      })
      .catch((err) => {
        console.log(err);
        setTooltipState({
          isVisible: true,
          isSuccessful: false,
          text: "Неправильная почта или пароль!",
        });
      })
      .finally(() => {
        setIsLoaderVisible(false);
        reset();
      });
  };
  return (
    <section className="login">
      <Logo />
      <h3 className="login__title">Рады видеть!</h3>
      <form
        name="login"
        className="login__form"
        onSubmit={handleSubmit(onSumbit)}
      >
        <fieldset className="login__form-fields">
          <div className="login__input-container">
            <label className="login__input-caption">E-mail</label>
            <input
              type="email"
              className="login__form-input"
              name="email"
              id="email-input"
              placeholder="Укажите e-mail адрес"
              {...register("email", {
                required: true,
                pattern: emailRegex,
              })}
            />
          </div>
          <div className="login__errors-container">
            {errors?.email && (
              <p className="login__error-message">Введён некорректный email</p>
            )}
          </div>
          <div className="login__input-container">
            <label className="login__input-caption">Пароль</label>
            <input
              type="password"
              className="login__form-input"
              name="password"
              id="password-input"
              placeholder="Введите пароль"
              {...register("password", {
                required: "Поле должно быть заполнено",
                minLength: {
                  value: passwordMinLength,
                  message: "Пароль должен быть не короче 8 символов",
                },
              })}
            />
          </div>
          <div className="login__errors-container">
            {errors?.password && (
              <p className="login__error-message">
                {errors?.password?.message || "Error"}
              </p>
            )}
          </div>
        </fieldset>
        <Button
          additionalClass={!isValid && "button_disabled"}
          text={"Войти"}
          type={"form-login"}
          buttonType="submit"
        />
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
