import "./NavTab.css";

const NavTab = () => {
  return (
    <section>
      <nav className="nav-tab">
        <a className="nav-tab__link" href="#about-project" target="_self">
          О проекте
        </a>
        <a className="nav-tab__link" href="#techs" target="_self">
          Технологии
        </a>
        <a className="nav-tab__link" href="#student" target="_self">
          Студент
        </a>
      </nav>
    </section>
  );
};

export default NavTab;
