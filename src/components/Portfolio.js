import linkIcon from "../images/link_icon.svg";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <div className="portfolio__line">
        <p className="portfolio__item">Статичный сайт</p>
        <a
          className="portfolio__link"
          href="https://github.com/sheinsvyatoslav/how-to-learn"
        >
          <img
            className="portfolio__link-icon"
            src={linkIcon}
            alt="Иконка ссылки"
            target="_blank"
          />
        </a>
      </div>
      <div className="portfolio__line">
        <p className="portfolio__item">Адаптивный сайт</p>
        <a
          className="portfolio__link"
          href="https://github.com/sheinsvyatoslav/russian-travel"
        >
          <img
            className="portfolio__link-icon"
            src={linkIcon}
            alt="Иконка ссылки"
            target="_blank"
          />
        </a>
      </div>
      <div className="portfolio__line">
        <p className="portfolio__item">Одностраничное приложение</p>
        <a
          className="portfolio__link"
          href="https://github.com/sheinsvyatoslav/react-mesto-api-full"
        >
          <img
            className="portfolio__link-icon"
            src={linkIcon}
            alt="Иконка ссылки"
            target="_blank"
          />
        </a>
      </div>
    </section>
  );
}
