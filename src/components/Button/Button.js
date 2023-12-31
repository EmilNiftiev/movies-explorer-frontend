import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ text, type, onClick, closeSideMenu }) => {
  return (
    <>
      {type === "login" ? (
        <Link className="button button_type_login" to="/signin">
          {text}
        </Link>
      ) : type === "account" ? (
        <Link
          onClick={closeSideMenu}
          className="button button_type_account"
          to="/profile"
        >
          {text}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`
      button
      ${type === "search" && "button_type_search"}
      ${type === "more" && "button_type_more"}
      ${type === "movies-like" && "button_type_movies-like"}
      ${type === "delete-movie" && "button_type_delete-movie"}
      ${type === "form-login" && "button_type_form-login"}
      ${type === "form-register" && "button_type_form-register"}
      ${type === "profile-edit" && "button_type_profile-edit"}
      ${type === "profile-logout" && "button_type_logout"}
      ${type === "close-menu" && "button_type_close-menu"}
      ${type === "burger-button" && "button_type_burger-button"}
      `}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
