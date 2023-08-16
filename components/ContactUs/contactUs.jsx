import styles from './contactUs.module.css';

export default function ContactUs() {
  return (
    <div className={styles.subscribeNewsletterSection}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.body}>
            <div className={styles.column}>
              <div className={styles.header}>
                <div className={styles.title}>
                  Enter your e-mail address and get started for free
                </div>
                <div className={styles.description}>
                  Stay up to date with the most relevant information, our new
                  collections, news and special offers!
                </div>
              </div>
              <div className={styles.form}>
                <div className={styles.inputField}>
                  <div className={styles.withLabel}>
                    <div className={styles.labelContent}>Label goes here</div>
                    <div className={styles.inputdefault}>
                      <div className={styles.inputContent}>
                        <div className={styles.content}>
                          Your e-mail address
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.hintMessageContent}>
                    Hint message goes here
                  </div>
                </div>
                <div className={styles.button}>
                  <div className={styles.button1}>Subscribe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div class="card">
    //   <div class="card-body">
    //     <h5 class="card-title">Special title treatment</h5>
    //     <p class="card-text">
    //       With supporting text below as a natural lead-in to additional content.
    //     </p>
    //     <a href="#" class="btn btn-primary">
    //       Go somewhere
    //     </a>
    //   </div>
    // </div>
  );
}
