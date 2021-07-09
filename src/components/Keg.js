import React from "react";
import PropTypes from "prop-types";



function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.brand} - {props.name} </h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pintsLeft: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};
export default Keg;