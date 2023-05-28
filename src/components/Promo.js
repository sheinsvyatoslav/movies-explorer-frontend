import promoImage from "../images/promo_image.svg";
import styles from "./promo.module.scss";

export const Promo = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className={styles.description}>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button className={styles.button}>Узнать больше</button>
        </div>
        <img
          className={styles.image}
          src={promoImage}
          alt="Изображение баннера"
        />
      </div>
    </section>
  );
};
