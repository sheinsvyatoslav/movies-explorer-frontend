import styles from "./techs.module.scss";

export const Techs = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Технологии</h2>
        <h3 className={styles.subtitle}>7 технологий</h3>
        <p className={styles.description}>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>HTML</li>
          <li className={styles.item}>CSS</li>
          <li className={styles.item}>JS</li>
          <li className={styles.item}>React</li>
          <li className={styles.item}>Git</li>
          <li className={styles.item}>Express.js</li>
          <li className={styles.item}>mongoDB</li>
        </ul>
      </div>
    </section>
  );
};
