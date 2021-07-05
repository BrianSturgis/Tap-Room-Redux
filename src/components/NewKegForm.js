import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      names: event.target.names.value,
      brand: event.target.brand.value,
      price: parseFloat(event.target.price.value),
      pintsLeft: parseFloat(event.target.pintsLeft.value),
      alcoholContent:parseFloat (event.target.alcoholContent.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="press to add" />
    </React.Fragment>
  );
}
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};
export default NewKegForm;