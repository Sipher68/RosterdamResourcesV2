import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary sticky-top">
      <div className="container-fluid">
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
                <Link className="nav-link" aria-current="page" href="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/Services">
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
