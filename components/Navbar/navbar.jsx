import styles from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    // <div className={styles.navbar}>
    //   <div className={styles.navigationDesktop}>
    //     <div className={styles.container}>
    //       <div className={styles.rosterdamResources}>Rosterdam Resources</div>
    //       <div className={styles.navigation}>
    //         <div className={styles.links}>
    //           <div className={styles.button}>
    //             <div className={styles.contact}>
    //               <Link href="/">Home</Link>
    //             </div>
    //           </div>
    //           <div className={styles.button}>
    //             <div className={styles.contact}>
    //               <Link href="/">About Us</Link>
    //             </div>
    //           </div>
    //           <div className={styles.button}>
    //             <div className={styles.contact}>Contact</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          Rosterdam Resources
        </a>{' '}
        <Link className="navbar-brand fw-bold" aria-current="page" href="/">
          Rosterdam Resources
        </Link>{' '}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
