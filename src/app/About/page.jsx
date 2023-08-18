import React from 'react';

export default function About() {
  return (
    <>
      <div className="d-flex justify-content-center m-2">
        <div className="col-sm-6">
          <section className="card m-2" style={{ width: '50vw' }}>
            <header className="card-header m-2 fw-bold fs-1 text-decoration-underline text-center bg-info bg-gradient">
              About Us
            </header>
            <div className="card-body bg-light bg-gradient">
              <p className="fs-6">
                Rosterdam Resources Inc. opened its business office and testing
                facilities in Las Piñas, Metro Manila in 2010.
              </p>
              <p className="fs-6">
                Rosterdam provides Mechanical Testing Services (MTS) for
                products such as ceramic floor tiles, wall tiles, and other
                special-purpose tiles as well as other related or similar
                products. It also provides Inspection and Verification Services
                (IVS) since 2013 for imported products under the "List of
                Product under Mandatory Certification" of the Bureau of
                Philippines Standards, Department of Trade and Industry
                (BPS-DTI). The items inspected include Electrical & Electronic
                Products, Mechanical/Building, and Construction Materials as
                well as Chemicals & other Consumer Products.
              </p>
              <p className="fs-6">
                Rosterdam holds Certificate of Recognition from the BPS-DTI as
                well as Certificate of Accreditation from the Philippine
                Accreditation Bureau-DTI for the above-mentioned activities. The
                company adheres to or is guided by National, Regional, and or
                International Standards as well as best business practices as
                regards its tools and equipment, testing, and inspection
                procedures and likewise complies with related rules and
                regulations of concerned regulatory bodies. It also employs or
                engages highly competent, business professional, Engineers, and
                trained technical personnel to ensure accurate and consistent
                Inspection & Testing results.
              </p>
              <p className="fs-6">
                Rosterdam provides its services with industry-acceptable lead
                times and the flexibility to provide resources to maintain or
                improve on such service lead times as necessary and at the least
                possible cost. As of this writing, Rosterdam Resources Inc. has
                provided its services to more than 200 domestic and overseas
                Business Entities.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-sm-6">
          <section className="card m-2" style={{ height: '22rem' }}>
            <header className="card-header m-2 fw-bold fs-1 text-decoration-underline text-center bg-info bg-gradient">
              Our Vision
            </header>
            <div className="card-body bg-light bg-gradient">
              <p className="fs-6">
                Rosterdam Resources Inc. strives to be among the industry
                leaders in providing testing, evaluation, inspection, and
                verification services.
              </p>
            </div>
          </section>
        </div>
        <div className="col-sm-6">
          <section className="card m-2" style={{ height: '22rem' }}>
            <header className="card-header m-2 fw-bold fs-1 text-decoration-underline text-center bg-info bg-gradient">
              Our Mission
            </header>
            <div className="card-body bg-light bg-gradient">
              <p className="fs-6">
                Understanding and exceeding customer expectations are the
                commitment of management and its employees.
              </p>
              <p className="fs-6">
                As an organization, we subscribe to honesty, reliability, and
                integrity in dealing with our customers, suppliers, partners,
                associates, government regulatory bodies, and the community.
              </p>
              <p className="fs-6">
                We likewise are committed to providing a work environment that
                is safe, where all are treated with fairness and respect, where
                all have the opportunity to contribute to effecting improvement
                actions for making things better for all the company's
                stakeholders, but most importantly for our customers.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center m-2">
        <section className="card">
          <header className="card-header m-2 fw-bold fs-1 text-decoration-underline text-center bg-info bg-gradient">
            Our Company Values
          </header>
          <div className="card-body bg-light bg-gradient">
            <p className="fs-6">
              ☼ Make Customer Happy ☼ We make the customers happy by
              anticipating and exceeding their needs and wishes thereby
              resulting in a sustainable bond or relationship with them.
            </p>
            <p className="fs-6">
              ☼ Deliver on Promises ☼ We always move towards continuous
              improvement to effectively and efficiently deliver our promises.
            </p>
            <p className="fs-6">
              ☼ Work as a Team ☼ We help and support each other to pursue a way
              of working based on collective trust, respect and competence.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
