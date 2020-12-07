import React from "react";

const GigItem = ({ gig }) => {
  return (
    <div className="card card-body bg-light mb-3">
      <div className="row">
        <div className="col-lg-6 col-md-4 col-8">
          <h3>Organisation:{gig.organisation}</h3>
          <p>Company:{gig.company}</p>
          <p>Website:{gig.website}</p>
          <p>Contact:{gig.contact}</p>
          <p>Location:{gig.location}</p>
          <p>Gig Info:{gig.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default GigItem;
