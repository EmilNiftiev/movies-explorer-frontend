import "./Footer.css";
import { currentDate } from "../../utils/constants";

const Footer = () => {
  return (
    <section className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; {currentDate}</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              href="https://praktikum.yandex.ru/"
              rel="noreferrer"
              target="_blank"
              className="footer__link-item"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list-item">
            <a
              href="https://github.com/EmilNiftiev"
              rel="noreferrer"
              target="_blank"
              className="footer__link-item"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
