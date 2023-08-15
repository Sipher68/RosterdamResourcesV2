import styles from './faq.module.css';
import Image from 'next/image';
import Link from 'next/link';

import EmailIcon from '../../public/assets/email.svg';

export default function FAQ() {
  return (
    // <div className={styles.faqSection}>
    //   <div className={styles.section}>
    //     <div className={styles.container}>
    //       <div className={styles.sectionHeader}>
    //         <div className={styles.section1}>
    //           <div className={styles.container1}>
    //             <div className={styles.label}>
    //               <div className={styles.label1}>Services</div>
    //             </div>
    //             <div className={styles.body}>
    //               <div className={styles.text}>
    //                 <div className={styles.title}>What We Do</div>
    //                 <div className={styles.description}>
    //                   We tried to answer most common questions, if you have any
    //                   additional, please get in touch with our friendly team
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.content}>
    //       <div className={styles.questions}>
    //         <div className={styles.faqCardsBase}>
    //           <div className={styles.content1}>
    //             <div className={styles.question}>
    //               <p className={styles.inspectionverificationHelp}>
    //                 Inspection/Verification: "Helps speed up your ICC
    //                 compliance"
    //               </p>
    //               <p className={styles.inspectionverificationHelp}>&nbsp;</p>
    //               <p
    //                 className={styles.rosterdamProvidesYou}
    //               >{`Rosterdam provides you with inspection & verification service of your importation of products that needs to comply with the government (Bureau of Philippine Standards, Department of Trade and Industry, BPS-DTI), Import Commodity Clearance (ICC) requirements. Together with you, Rosterdam will work out the shortest possible lead time for your shipment to be inspected at the least possible cost and likewise assist you in having your product samples tested promptly to the required Philippine National Standards (PNS), by the appropriate Testing Laboratory.`}</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className={styles.faqCardsBase1}>
    //           <div className={styles.content2}>
    //             <div className={styles.text1}>
    //               <div className={styles.question1}>
    //                 Laboratory Testing: "Accurate Results recognized everywhere"
    //               </div>
    //               <div className={styles.removeCircle} />
    //             </div>
    //             <div className={styles.answer}>
    //               <p className={styles.providesLaboratoryTesting}>
    //                 Provides laboratory testing services for Ceramic Tiles and
    //                 other similar products for household, commercial,
    //                 institutional, or industrial application. Our test results
    //                 will provide you the information you need regarding safety,
    //                 durability, and compliance to specifications of your
    //                 products.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className={styles.modal}>
    //         <div className={styles.text2}>
    //           <div className={styles.title1}>Still have a questions?</div>
    //           <div className={styles.description1}>
    //             We're sorry we couldn't provide you with the information you
    //             were looking for. Please contact us and we'll be happy to help.
    //           </div>
    //         </div>
    //         <div className={styles.button}>
    //           <Image
    //             className={styles.emailIcon}
    //             src={EmailIcon}
    //             width={20}
    //             height={20}
    //           />
    //           <div className={styles.button1}>Contact us</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="row flex justify-content-center">
      <div className="col-sm-6">
        <div className="card align-items-center border-0 bg-body-tertiary">
          <div className="card-body">
            <h1 className="card-title text-center fw-bold">What We Do</h1>
            <p className="card-text text-center fw-medium">
              We tried to answer most common questions, if you have any
              additional, please get in touch with our friendly team
            </p>
          </div>
        </div>
        <div className="card m-5">
          <div className="card-body">
            <h4 className="card-title">
              Inspection/Verification: "Helps speed up your ICC compliance"
            </h4>
            <p className="card-text">
              {`Rosterdam provides you with inspection & verification service of your importation of products that needs to comply with the government (Bureau of Philippine Standards, Department of Trade and Industry, BPS-DTI), Import Commodity Clearance (ICC) requirements. Together with you, Rosterdam will work out the shortest possible lead time for your shipment to be inspected at the least possible cost and likewise assist you in having your product samples tested promptly to the required Philippine National Standards (PNS), by the appropriate Testing Laboratory.`}
            </p>
          </div>
        </div>
        <div className="card m-5">
          <div className="card-body">
            <h4 className="card-title">
              Laboratory Testing: "Accurate Results recognized everywhere"
            </h4>
            <p className="card-text">
              Provides laboratory testing services for Ceramic Tiles and other
              similar products for household, commercial, institutional, or
              industrial application. Our test results will provide you the
              information you need regarding safety, durability, and compliance
              to specifications of your products.
            </p>
          </div>
        </div>
        <div className="card m-5">
          <div className="card-body">
            <h4 className="card-title text-center">Still have a questions?</h4>
            <p className="card-text text-center">
              We're sorry we couldn't provide you with the information you were
              looking for. Please contact us and we'll be happy to help.
            </p>
            <div className="d-flex justify-content-center">
              <Link
                className="btn btn-primary d-flex align-items-center m-2"
                href="/"
              >
                <Image src={EmailIcon} width={0} height={0} />
                Send an Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
