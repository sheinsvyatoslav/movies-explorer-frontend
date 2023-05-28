import linkIcon from "../images/link_icon.svg";
import styles from "./portfolio.module.scss";

export const Portfolio = () => {
  return (
    <section className={styles.main}>
      <p className={styles.title}>Портфолио</p>
      <div className={styles.line}>
        <p className={styles.item}>Статичный сайт</p>
        <a
          className={styles.link}
          href="https://github.com/sheinsvyatoslav/how-to-learn"
        >
          <img
            className={styles.linkIcon}
            src={linkIcon}
            alt="Иконка ссылки"
            target="_blank"
          />
        </a>
      </div>
      <div className={styles.line}>
        <p className={styles.item}>Адаптивный сайт</p>
        <a
          className={styles.link}
          href="https://github.com/sheinsvyatoslav/russian-travel"
        >
          <img
            className={styles.linkIcon}
            src={linkIcon}
            alt="Иконка ссылки"
            target="_blank"
          />
        </a>
      </div>
      <div className={styles.line}>
        <p className={styles.item}>Одностраничное приложение</p>
        <a
          className={styles.link}
          href="https://github.com/sheinsvyatoslav/react-mesto-api-full"
        >
          <img
            className={styles.linkIcon}
            src={linkIcon}
            alt="Иконка ссылки"
            target="_blank"
          />
        </a>
      </div>
    </section>
  );
};
