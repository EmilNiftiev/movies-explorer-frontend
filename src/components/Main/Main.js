import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

const Main = ({ isLoggedIn, openSideMenu, isTablet }) => {
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        openSideMenu={openSideMenu}
        isTablet={isTablet}
      />
      <section className="main">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </section>
      <Footer />
    </>
  );
};

export default Main;
