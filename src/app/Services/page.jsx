import React from 'react';

export default function Services() {
  return (
    <>
      <div className="card d-flex m-5 bg-light">
        <div className="card-body">
          <h3 className="card-title text-decoration-underline fw-bold fs-2 ">
            Services
          </h3>
          <h4 className="fs-bold fs-3">
            Inspection/Verification:{' '}
            <em>&quot;Helps speed up your ICC compliance&quot;</em>
          </h4>
          <p className="card-text fw-medium fs-5">
            Rosterdam provides you with inspection & verification service of
            your importation of products that needs to comply with the
            government (Bureau of Philippine Standards, Department of Trade and
            Industry, BPS-DTI), Import Commodity Clearance (ICC) requirements.
            <br />
            Together with you, Rosterdam will work out the shortest possible
            lead time for your shipment to be inspected at the least possible
            cost and likewise assist you in having your product samples tested
            promptly to the required Philippine National Standards (PNS), by the
            appropriate Testing Laboratory.
          </p>
        </div>
        <div className="card-body">
          <h4 className="fs-bold fs-3">
            Laboratory Testing:{' '}
            <em>&quot;Accurate Results recognized everywhere&quot;</em>
          </h4>
          <p className="card-text fw-medium fs-5">
            Rosterdam is a Mechanical Testing Laboratory accredited by the
            Philippine Accreditation Bureau and also a Recognized Testing
            Laboratory of the Bureau of Philippine Standards. It provides
            laboratory testing services for Ceramic Tiles and other similar
            products for household, commercial, institutional, or industrial
            application. Our test results will provide you the information you
            need regarding safety, durability, and compliance to specifications
            of your products. Our test results are recognized worldwide since
            our laboratory accreditation is traceable to regional and
            international oprganizations such as <b>APLAC</b> and <b>ILAC</b>.
          </p>
        </div>
      </div>
    </>
  );
}
