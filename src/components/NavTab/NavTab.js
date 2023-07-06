import "./NavTab.css";

const NavTab = () => {
  return (
    <nav className="nav-tab">
      <a className="nav-tab__link" href="#1" target="_self">
        О проекте
      </a>
      <a className="nav-tab__link" href="#2" target="_self">
        Технологии
      </a>
      <a className="nav-tab__link" href="#3" target="_self">
        Студент
      </a>
    </nav>
  );
};

export default NavTab;
