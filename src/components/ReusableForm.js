import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='name of beer' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='alcohol Content and type' />
        <input
          type='text'
          name='pintsLeft'
          placeholder='Pints per keg (a full keg is 124 pints)'
          min="0"
          max="124"/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}


ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};
export default ReusableForm;