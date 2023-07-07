import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({
  text,
  type,
}) => {
  return (
    <>
      {type === 'login' ? (
        <Link className="button button_type_login" to="/signin">
          {text}
        </Link>
      ) : type === 'account' ? (
        <Link
          className="button button_type_account"
          to="/profile"
        >
          {text}
        </Link>
      ) : (
        <button
          className={`
      button
      ${type === 'search' && `button_type_search`}
      `}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;