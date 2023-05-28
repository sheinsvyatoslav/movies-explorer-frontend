import { Navigation } from "./navigation";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.main}>
      <h2 className={styles.title}>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className={styles.container}>
        <p className={styles.copyright}>&copy; 2022</p>
        <Navigation />
      </div>
    </footer>
  );
};
