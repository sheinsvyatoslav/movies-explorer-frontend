import styles from "./more-button.module.scss";

export const MoreButton = ({ handleClick }) => {
  return (
    <div className={styles.main}>
      <button
        className={styles.button}
        type="button"
        aria-label="Ещё"
        onClick={handleClick}
      >
        Ещё
      </button>
    </div>
  );
};
