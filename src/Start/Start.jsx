import styles from "./Start.module.css";

function Start({ handleClick }) {
  return (
    <>
      <h1 className={styles.h1}>Quizzical</h1>
      <p className={styles.p}>Test your general knowledge!</p>
      <button className={styles.button} onClick={handleClick}>
        Start quiz
      </button>
    </>
  );
}

export default Start;
