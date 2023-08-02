import styles from "./Header.module.scss";
import logoImg from "./../images/logo.png";

const Header = () => {
  const handleScrollToElement = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles["main-logo"]}>
          <a href="/" className={styles["logo-link"]}>
            <img
              src={logoImg}
              alt="Swapnil Mane Logo"
              className={styles["main-logo__img"]}
            />
          </a>
        </div>

        <ul className={styles["navigation__list"]}>
          <li className={styles["navigation__item"]}>
            <button
              href="#section-about"
              className={styles["navigation__link"]}
              onClick={() => {
                window.scrollTo({
                  top: document.documentElement.scrollHeight / 2,
                  behavior: "smooth",
                });
              }}
            >
              FAQ
            </button>
          </li>
          <li className={styles["navigation__item"]}>
            <button
              onClick={handleScrollToElement}
              className={`${styles["navigation__link"]} ${styles["navigation__link--Resume"]}`}
            >
              Buy Now
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
