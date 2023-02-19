export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a
            className="navigation__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
        </li>
        <li className="navigation__item">
          <a
            className="navigation__link"
            href="https://t.me/shsvtslv"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </li>
        <li className="navigation__item">
          <a
            className="navigation__link"
            href="https://github.com/sheinsvyatoslav"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}
