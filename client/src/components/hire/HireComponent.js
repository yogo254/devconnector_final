import React from "react";
import { connect } from "react-redux";
import { addGig } from "../../actions/profileActions";
import { setAlert } from "../../actions/alert";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

const HireComponent = ({ user, setAlert, addGig }) => {
  let formData = {};
  const onSubmit = e => {
    e.preventDefault();
    setAlert(`${user.name} notified of the gig`, "success");
    addGig(user._id, formData);
  };

  return (
    <div className="create-profile">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Gig Details</h1>
            <p className="lead text-center">
              Let's get some information about the gig
            </p>
            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={e => onSubmit(e)}>
              <TextFieldGroup
                placeholder="* Organisation Name"
                name="organisation"
                onChange={e => {
                  formData.organisation = e.target.value;
                }}
              />

              <TextFieldGroup
                placeholder="Company"
                name="company"
                onChange={e => {
                  formData.company = e.target.value;
                }}
              />
              <TextFieldGroup
                placeholder="Website"
                name="website"
                onChange={e => {
                  formData.website = e.target.value;
                }}
              />
              <TextFieldGroup
                placeholder="email"
                name="email"
                onChange={e => {
                  formData.contact = e.target.value;
                }}
              />
              <TextFieldGroup
                placeholder="Location"
                name="location"
                onChange={e => {
                  formData.location = e.target.value;
                }}
              />

              <TextAreaFieldGroup
                placeholder="Gig Bio"
                name="bio"
                onChange={e => {
                  formData.bio = e.target.value;
                }}
              />

              <input
                type="submit"
                value="Submit"
                className="btn btn-info btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.selectedUser
});

export default connect(
  mapStateToProps,
  { setAlert, addGig }
)(HireComponent);
