import photo from "../images/photo.jpeg";
import styles from "./about-me.module.scss";

export const AboutMe = () => {
  return (
    <section className={styles.main}>
      <h2 className={styles.title}>Студент</h2>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.name}>Святослав</h3>
          <p className={styles.description}>Фронтенд-разработчик, 25 лет</p>
          <p className={styles.summary}>
            Занимаюсь фронтенд-разработкой, поскольку люблю решать логические
            задачи и видеть результат своей работы. В свободное время люблю
            ходить в кино, кататься на роликах/коньках. Обожаю играть в шахматы
            и английский.
          </p>
          <ul className={styles.links}>
            <li>
              <a className={styles.link} href="https://t.me/shsvtslv">
                Telegram
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="https://github.com/sheinsvyatoslav"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className={styles.photo} src={photo} alt="Моё фото" />
      </div>
    </section>
  );
};
