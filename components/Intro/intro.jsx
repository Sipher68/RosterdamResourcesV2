import Image from 'next/image';
import styles from './intro.module.css';
import ceramicImage from '../../public/assets/ceramictest.jpg';
import Link from 'next/link';

export default function Intro() {
  return (
    // <div className={styles.section}>
    //   <div className={styles.container}>
    //     <div className={styles.columns}>
    //       <div className={styles.column}>
    //         <div className={styles.content}>
    //           <div className={styles.text}>
    //             <div className={styles.heading}>
    //               <p className={styles.rosterdamResources}>
    //                 Rosterdam Resources
    //               </p>
    //               <p className={styles.doingThingsBetter}>
    //                 <span>
    //                   <span className={styles.doingThingsBetter1}>
    //                     Doing Things Better
    //                   </span>
    //                 </span>
    //               </p>
    //               <p className={styles.yourPartnerInTestingAndIn}>
    //                 <span>
    //                   <span className={styles.yourPartnerIn}>
    //                     YOUR PARTNER IN TESTING AND INSPECTION
    //                   </span>
    //                 </span>
    //               </p>
    //             </div>
    //             <div className={styles.description}>
    //               Rosterdam provides Mechanical Testing Services (MTS) for
    //               products such as ceramic floor tiles, wall tiles, and other
    //               special-purpose tiles as well as other related or similar
    //               products.
    //             </div>
    //           </div>
    //           <div className={styles.bottom}>
    //             <Link href="/">
    //               <div className={styles.actions}>
    //                 <div className={styles.button}>
    //                   <div className={styles.button1}>Learn more</div>
    //                 </div>
    //               </div>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className={styles.column1}>
    //         <Image
    //           className={styles.galleryFeaturesBase}
    //           src={ceramicImage}
    //           width={500}
    //           height={700}
    //           alt="ceramic test image"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="row  m-5">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
