import "./Logo.css";
import { Link } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <img className="logo__image" src={headerLogo} alt="Логотип сайта" />
    </Link>
  );
};

export default Logo;
