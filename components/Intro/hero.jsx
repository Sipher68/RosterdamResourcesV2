import Image from 'next/image';
import styles from './intro.module.css';
import ceramicImage from '../../public/assets/ceramictest.jpg';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="row m-2">
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
