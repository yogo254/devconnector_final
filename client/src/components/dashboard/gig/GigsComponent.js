import React from "react";
import { connect } from "react-redux";
import GigItem from "./GigItem";
const GigsComponent = ({ gigs }) => {
  let gigItems;

  if (gigs.length > 0) {
    gigItems = (
      <div>
        <h3>Your Gigs </h3>
        {gigs.map(g => (
          <GigItem gig={g} />
        ))}
      </div>
    );
  } else {
    gigItems = <h4>No Gigs Yet</h4>;
  }
  return gigItems;
};
const mapStateToProps = state => ({
  gigs: state.profile.profile.gigs
});

export default connect(mapStateToProps)(GigsComponent);
