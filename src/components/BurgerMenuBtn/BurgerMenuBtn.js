import Button from "../Button/Button";
import "./BurgerMenuBtn.css";

function BurgerMenuButton({ openSideMenu }) {
  const handleClick = () => {
    openSideMenu();
  };

  return (
    <nav className="burger">
      <Button onClick={handleClick} type={"burger-button"} />
    </nav>
  );
}

export default BurgerMenuButton;
