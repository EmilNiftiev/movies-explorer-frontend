import "./Profile.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import {
  nameMinLength,
  nameMaxLength,
  nameRegex,
  emailRegex,
} from "../../utils/constants";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";

function Profile({
  isLoggedIn,
  openSideMenu,
  setIsLoaderVisible,
  logOut,
  setCurrentUser,
  setTooltipState,
}) {
  const currentUser = useContext(CurrentUserContext);

  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    values: {
      firstName: currentUser.name,
      email: currentUser.email,
    },
  });

  const isSubmitDisabled = !isValid || !isDirty;

  const onSumbit = (formdata) => {
    setIsLoaderVisible(true);
    mainApi
      .setUserInfo(formdata.firstName, formdata.email)
      .then((res) => {
        setCurrentUser(res);
        setTooltipState({
          isVisible: true,
          isSuccessful: true,
          text: "Данные профиля изменены!",
        });
      })
      .catch((err) => {
        console.log(err);
        setTooltipState({
          isVisible: true,
          isSuccessful: false,
          text: "Что-то пошло не так...",
        });
      })
      .finally(() => {
        setIsLoaderVisible(false);
      });
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} openSideMenu={openSideMenu} />
      <section className="profile">
        <h3 className="profile__title">{`Привет, ${currentUser.name}!`}</h3>
        <form
          name="profile"
          className="profile__form"
          onSubmit={handleSubmit(onSumbit)}
        >
          <fieldset className="profile__form-fieldset">
            <div className="profile__input-container">
              <label className="profile__input-caption">Имя</label>
              <input
                type="text"
                placeholder="Введите имя"
                className="profile__form-input"
                name="name"
                id="name-input"
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
            <div className="profile__errors-container">
              {errors?.firstName && (
                <p className="profile__error-message">
                  {errors?.firstName?.message ||
                    "Имя содержит недопустимые символы"}
                </p>
              )}
            </div>
            <div className="profile__input-container">
              <label className="profile__input-caption">E-mail</label>
              <input
                type="email"
                placeholder="Email"
                className="profile__form-input"
                name="email"
                id="email-input"
                {...register("email", {
                  required: true,
                  pattern: emailRegex,
                })}
              />
            </div>
          </fieldset>
          <div className="profile__errors-container">
            {errors?.email && (
              <p className="profile__error-message">
                Введён некорректный email
              </p>
            )}
          </div>
          <Button
            additionalClass={isSubmitDisabled && "button_disabled"}
            text={"Редактировать"}
            type={"profile-edit"}
            buttonType="submit"
          />
        </form>
        <Button
          onClick={logOut}
          text={"Выйти из аккаунта"}
          type={"profile-logout"}
        />
      </section>
    </>
  );
}

export default Profile;
