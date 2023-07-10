import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = ({ navStyle }) => {
  return (
    <section>
      {navStyle === "header-menu" && (
        <nav className={"navigation"}>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link_active" : ""}`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `navigation navigation__link ${isActive ? "navigation__link_active" : ""}`
            }
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
      )}
      {navStyle === "side-menu" && (
        <nav className={"side-navigation"}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `side-navigation side-navigation__link ${
                isActive ? "side-navigation__link_active" : ""
              }`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `side-navigation side-navigation__link ${
                isActive ? "side-navigation__link_active" : ""
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `side-navigation side-navigation__link ${
                isActive ? "side-navigation__link_active" : ""
              }`
            }
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
      )}
    </section>
  );
};

export default Navigation;
