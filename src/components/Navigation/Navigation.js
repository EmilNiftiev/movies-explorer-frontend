import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = ({ navStyle, closeSideMenu }) => {
  return (
    <section>
      {navStyle === "header-menu" && (
        <nav className={"navigation"}>
          <NavLink
            onClick={closeSideMenu}
            to="/movies"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link_active" : ""}`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            onClick={closeSideMenu}
            to="/saved-movies"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link_active" : ""}`
            }
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
      )}
      {navStyle === "side-menu" && (
        <nav className={"side-navigation"}>
          <NavLink
            onClick={closeSideMenu}
            to="/"
            className={({ isActive }) =>
              `side-navigation__link ${isActive ? "side-navigation__link_active" : ""}`
            }
          >
            Главная
          </NavLink>
          <NavLink
            onClick={closeSideMenu}
            to="/movies"
            className={({ isActive }) =>
              `side-navigation__link ${isActive ? "side-navigation__link_active" : ""}`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            onClick={closeSideMenu}
            to="/saved-movies"
            className={({ isActive }) =>
              `side-navigation__link ${isActive ? "side-navigation__link_active" : ""}`
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
