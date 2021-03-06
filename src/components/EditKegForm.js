import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      names: event.target.names.value,
      brand: event.target.brand.value,
      priceByKeg: parseFloat(event.target.priceByKeg.value),
      alcoholContent: parseFloat(event.target.alcoholContent.value),
      pintsLeft: parseFloat(event.target.pintsLeft.value),
      id: keg.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func

};
export default EditKegForm;