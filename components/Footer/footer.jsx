import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className="card fixed-bottom">
        <div className="d-flex justify-content-between">
          <div className="col-4 p-2 m-2 d-flex align-items-center ">
            <span className="card-body">Rosterdam Resources</span>
            <span className="card-body">
              <Link href="/">Contact Us</Link>
            </span>
          </div>
          <div className="col-4 p-2 d-flex justify-content-center align-items-center">
            <span className="card-body m-0">
              <Link href="https://www.google.com/maps/dir//Rosterdam+Resources+Inc,+RSTI+Compound,+KM.+16,+Alabang-Zapote+Road,+Pamplona,+Las+Piñas,+Metro+Manila/@14.4514967,120.9617449,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397d03333b25dbd:0x5c0adfbf8372493d!2m2!1d120.9729408!2d14.4518?entry=ttu">
                RSTI Compound, KM. 16, Alabang-Zapote Road, Pamplona, Las Piñas,
                Metro Manila
              </Link>
            </span>
            <span className="card-body d-block">
              info@rosterdamresources.com
            </span>
          </div>
          <div className="col-4 d-flex align-items-center p-2">
            <span className="card-body m-0">©Rosterdam Resources Inc.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
