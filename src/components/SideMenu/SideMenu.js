import "./SideMenu.css";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";

function SideMenu({ isSideMenu, closeSideMenu }) {
  return (
    <section className={`side-menu ${isSideMenu && "side-menu_opened"}`}>
      <nav className="side-menu__content">
        <Button type={"close-menu"} onClick={closeSideMenu} />
        <Navigation navStyle={"side-menu"} closeSideMenu={closeSideMenu} />
        <Button
          type={"account"}
          text={"Аккаунт"}
          closeSideMenu={closeSideMenu}
        />
      </nav>
    </section>
  );
}

export default SideMenu;
