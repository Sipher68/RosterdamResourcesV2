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
    <div className="row m-5">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card border-0 bg-body-tertiary" style={{ height: 550 }}>
          <div className="card-body d-flex flex-column justify-content-center">
            <h1 className="card-title text-center">Rosterdam Resources</h1>
            <h4 className="card-title fw-light text-center">
              Doing Things Better
            </h4>
            <h5 className="card-title fw-light text-center">
              YOUR PARTNER IN TESTING AND INSPECTION
            </h5>
            <p className="card-text fw-medium text-center ">
              Rosterdam provides Mechanical Testing Services (MTS) for products
              such as ceramic floor tiles, wall tiles, and other special-purpose
              tiles as well as other related or similar products.
            </p>
            <div className="align-items-end">
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card border-0" style={{ height: 550 }}>
          <div className="card-body">
            <Image
              className="card-img img-fluid"
              src={ceramicImage}
              width={0}
              height={0}
              sizes="100vw"
              fill
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
