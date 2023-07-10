import "./SideMenu.css";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";

function SideMenu() {
  return (
    <section className={"side-menu side-menu_opened"}>
      <div className="side-menu__content">
        <Button type={"close"} />
        <Navigation navStyle={"side-menu"} />
        <Button type={"account"} text={"Аккаунт"} />
      </div>
    </section>
  );
}

export default SideMenu;
