import styles from "./SectionFeatures.module.scss";
import productShowcaseSrc from "./../../images/productShowcase.png";
// import feature_1_src from "./../../images/feature_1.png";
import feature_1_src from "./../../images/feature-1.png";
import feature_2_src from "./../../images/feature-2.png";
import feature_3_src from "./../../images/feature-3.png";

const SectionFeatures = (props) => {
  return (
    <section className={styles.section_project_details}>
      <h3 className={styles["section-portfolio__title"]}>
        Our Best Features 🔥
      </h3>
      <h3 className={styles["section-portfolio__mainTitle"]}>
        Data Extraction has never been this easier
      </h3>

      {/* Tromodoro */}
      <div className={styles["project-details"]}>
        <div className={styles["project-info"]}>
          <div className={styles["project-info__description"]}>
            <img
              src={feature_1_src}
              alt="Project feature"
              className={styles.project_info_image}
            ></img>
            <div className={styles["project-info__title"]}>
              Custom Data Points
            </div>
            <div className={styles.description__text}>
              Simply input the data points you need from the page, and our tool
              will recognize them automatically.
            </div>
          </div>
        </div>
        <div className={styles["project-info"]}>
          <div className={styles["project-info__description"]}>
            <img
              src={feature_2_src}
              alt="Project feature"
              className={styles.project_info_image}
            ></img>
            <div className={styles["project-info__title"]}>Pagination</div>
            <div className={styles.description__text}>
              Click a button to navigate through multiple pages and extract data
              all at once.
            </div>
          </div>
        </div>
        <div className={styles["project-info"]}>
          <div className={styles["project-info__description"]}>
            <img
              src={feature_3_src}
              alt="Project feature"
              className={styles.project_info_image}
            ></img>
            <div className={styles["project-info__title"]}>
              Export to Multiple Formats
            </div>
            <div className={styles.description__text}>
              Save the extracted data in various formats like CSV, Excel, JSON,
              and more.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
