import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            href="https://emilniftiev.github.io/how-to-learn/"
            target="_blank"
            className="portfolio__link-item"
            rel="noreferrer"
          >
            <p className="portfolio__name-item">Статичный сайт</p>
            <p className="portfolio__link-symbol">&#8599;</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://emilniftiev.github.io/russian-travel/"
            target="_blank"
            className="portfolio__link-item"
            rel="noreferrer"
          >
            <p className="portfolio__name-item">Адаптивный сайт</p>
            <p className="portfolio__link-symbol">&#8599;</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://emilniftiev.github.io/react-mesto-auth/"
            target="_blank"
            className="portfolio__link-item"
            rel="noreferrer"
          >
            <p className="portfolio__name-item">Одностраничное приложение</p>
            <p className="portfolio__link-symbol">&#8599;</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
