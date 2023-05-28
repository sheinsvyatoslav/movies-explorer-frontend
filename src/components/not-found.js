import { Link } from "react-router-dom";
import styles from "./not-found.module.scss";

export const NotFound = () => {
  return (
    <section className={styles.main}>
      <h2 className={styles.title}>404</h2>
      <p className={styles.subtitle}>Страница не найдена</p>
      <Link to="signup" className={styles.link}>
        Назад
      </Link>
    </section>
  );
};
