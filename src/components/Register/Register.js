import "./Register.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  nameMinLength,
  nameMaxLength,
  nameRegex,
  emailRegex,
  passwordMinLength,
} from "../../utils/constants";
import mainApi from "../../utils/MainApi";

const Register = ({ setIsLoaderVisible, handleLogin, setTooltipState }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    getValues,
  } = useForm({ mode: "onChange" });
  const onSumbit = () => {
    setIsLoaderVisible(true);
    mainApi
      .register(
        getValues("firstName"),
        getValues("email"),
        getValues("password")
      )
      .then((res) => {
        if (!res.error) {
          mainApi
            .login(getValues("password"), getValues("email"))
            .then((data) => {
              if (data.token) {
                localStorage.setItem("token", data.token);
                handleLogin();
                setTooltipState({
                  isVisible: true,
                  isSuccessful: true,
                  text: "Вы успешно зарегистрировались!",
                });
              }
            });
        }
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
    <section className="register">
      <Logo />
      <h3 className="register__title">Добро пожаловать!</h3>
      <form
        name="register"
        className="register__form"
        onSubmit={handleSubmit(onSumbit)}
      >
        <fieldset className="register__form-fields">
          <div className="register__input-container">
            <label className="register__input-caption">Имя</label>
            <input
              type="text"
              className="register__form-input"
              name="name"
              id="name-input"
              placeholder="Введите Ваше имя"
              {...register("firstName", {
                required: "Поле должно быть заполнено",
                minLength: {
                  value: nameMinLength,
                  message: "Минимальная длина имени - 2 символа",
                },
                maxLength: {
                  value: nameMaxLength,
                  message: "Максимальная длина имени - 30 символов",
                },
                pattern: nameRegex,
              })}
            />
          </div>
          <div className="register__errors-container">
            {errors?.firstName && (
              <p className="register__error-message">
                {errors?.firstName?.message ||
                  "Имя содержит недопустимые символы"}
              </p>
            )}
          </div>
          <div className="register__input-container">
            <label className="register__input-caption">E-mail</label>
            <input
              type="email"
              name="email"
              className="register__form-input"
              id="email-input"
              placeholder="Укажите e-mail адрес"
              {...register("email", {
                required: true,
                pattern: emailRegex,
              })}
            />
          </div>
          <div className="register__errors-container">
            {errors?.email && (
              <p className="register__error-message">
                Введён некорректный email
              </p>
            )}
          </div>
          <div className="register__input-container">
            <label className="register__input-caption">Пароль</label>
            <input
              type="password"
              name="password"
              className="register__form-input"
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
          <div className="register__errors-container">
            {errors?.password && (
              <p className="register__error-message">
                {errors?.password?.message || "Error"}
              </p>
            )}
          </div>
        </fieldset>
        <Button
          additionalClass={!isValid && "button_disabled"}
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
