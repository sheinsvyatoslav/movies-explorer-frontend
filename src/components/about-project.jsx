import styles from "./about-project.module.scss";
import cn from "classnames";

export const AboutProject = () => {
  return (
    <section className={styles.main}>
      <h2 className={styles.title}>О проекте</h2>
      <div className={styles.container}>
        <div className={styles.item}>
          <h3 className={styles.itemTitle}>
            Дипломный проект включал 5 этапов
          </h3>
          <p className={styles.itemDescription}>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemTitle}>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className={styles.itemDescription}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className={styles.timeline}>
        <div className={cn(styles.timelineCell, styles.timelineCellGreen)}>
          1 неделя
        </div>
        <div className={cn(styles.timelineCell, styles.timelineCellGrey)}>
          4 недели
        </div>
        <div className={cn(styles.timelineCell, styles.timelineCellLight)}>
          Back-end
        </div>
        <div className={cn(styles.timelineCell, styles.timelineCellLight)}>
          Front-end
        </div>
      </div>
    </section>
  );
};
