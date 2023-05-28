import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="https://t.me/shsvtslv"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={styles.link}
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
};
