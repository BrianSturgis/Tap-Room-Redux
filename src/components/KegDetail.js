import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingEdit, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h3>Name: {keg.names}</h3>
      <h3>Brewery: {keg.brand}</h3>
      <h3>price per keg: {keg.price}</h3>
      <h3>Alcohol Content: {keg.alcoholContent}</h3>
      <h3>Pints Remaining: {keg.pintsLeft}</h3>
      {keg.pintsLeft > 0 &&
      <button onClick={props.onClickingBuy} className="btn btn-success">Buy Pint</button>
      }
      {keg.pintsLeft === 0 &&
      <h1>sorry no more beers</h1>
      }
      <button onClick={props.onClickingRestock} className="btn btn-info">refill keg</button>
      <button onClick={ ()=>onClickingEdit (keg.id)}>Update Keg details</button>
      <button onClick={()=> onClickingDelete(keg.id)}>Close out Keg</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default KegDetail;