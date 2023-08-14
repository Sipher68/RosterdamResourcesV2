import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerSection}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.rosterdamResources}>Rosterdam Resources</div>
          <div className={styles.content}>
            <div className={styles.info}>
              <div className={styles.info}>
                <div className={styles.rstiCompoundKm}>
                  RSTI Compound, KM. 16, Alabang-Zapote Road, Pamplona, Las
                  Piñas, Metro Manila
                </div>
              </div>
            </div>
            <div className={styles.inforosterdamresourcescom}>
              <p className={styles.rosterdamResourcesInc}>
                info@rosterdamresources.com
              </p>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.rosterdamResourcesIncContainer}>
            <p className={styles.rosterdamResourcesInc}>
              ©Rosterdam Resources Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
