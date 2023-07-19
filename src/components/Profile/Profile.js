import "./Profile.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";

function Profile({ isLoggedIn, openSideMenu, setIsLoaderVisible }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });
  const onSumbit = (data) => {
    setIsLoaderVisible(true);
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <>
      <Header isLoggedIn={isLoggedIn} openSideMenu={openSideMenu} />
      <section className="profile">
        <h3 className="profile__title">Привет, Виталий!</h3>
        <form name="profile" className="profile__form" onSubmit={handleSubmit(onSumbit)}>
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
                    value: 2,
                    message: "Минимальная длина имени - 2 символа",
                  },
                  maxLength: {
                    value: 30,
                    message: "Максимальная длина имени - 30 символов",
                  },
                })}
              />
            </div>
            <div className="profile__errors-container">
              {errors?.firstName && (
                <p className="profile__error-message">
                  {errors?.firstName?.message || "Error"}
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
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
            </div>
          </fieldset>
          <div className="profile__errors-container">
            {errors?.email && (
              <p className="profile__error-message">Введён некорректный email</p>
            )}
          </div>
          <Button
            additionalClass={!isValid && "button_disabled"}
            text={"Редактировать"}
            type={"profile-edit"}
            buttonType="submit"
          />
        </form>
        <Button text={"Выйти из аккаунта"} type={"profile-logout"} />
      </section>
    </>
  );
}

export default Profile;
