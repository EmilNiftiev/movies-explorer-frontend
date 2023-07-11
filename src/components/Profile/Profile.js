import "./Profile.css";
import Header from "../Header/Header";
import Button from "../Button/Button";

function Profile({ isLoggedIn, openSideMenu }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} openSideMenu={openSideMenu} />
      <section className="profile">
        <h3 className="profile__title">Привет, Виталий!</h3>
        <form name="profile" className="profile__form">
          <fieldset className="profile__form-fieldset">
            <div className="profile__input-container">
              <label className="profile__input-caption">Имя</label>
              <input
                type="text"
                placeholder="Введите имя"
                className="profile__form-input"
                name="name"
                required
                minLength={2}
                id="name-input"
              />
            </div>
            <div className="profile__input-container">
              <label className="profile__input-caption">E-mail</label>
              <input
                type="email"
                placeholder="Email"
                className="profile__form-input"
                name="email"
                required
                id="email-input"
              />
            </div>
          </fieldset>
          <Button
            additionalClass={"button_disabled"}
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
