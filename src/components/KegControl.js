import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      createNewKeg: false,
      selectedKeg: null,
      editing: false
    };
  }

// read
handleClick = () => {
  if (this.state.selectedKeg != null) {
    this.setState({
      selectedKeg: null,
      editing: false
    });
  } else {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);   
    }
  }


handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }


handleChangingSelectedKeg = (id) => {
  const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
  this.setState({selectedKeg: selectedKeg});
}

handleEditClick = () => {
  this.setState({editing: true});
}

handleEditingKegInList = (kegToEdit) => {
  const editedMasterKegList = this.state.masterKegList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(kegToEdit);
  this.setState({
    masterKegList: editedMasterKegList,
    editing: false,
    selectedKeg: kegToEdit
  });
}

handleBuyClick = () => {
  const selectedKeg = this.state.selectedKeg;
  const pintToBuy = Object.assign({}, selectedKeg, {pintsLeft: selectedKeg.pintsLeft - 1});
  const editedMasterKegList = this.state.masterKegList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(pintToBuy);
  this.setState({
    masterKegList: editedMasterKegList,
    selectedKeg: pintToBuy
  });
}

handleRestockClick = () => {
  const selectedKeg = this.state.selectedKeg;
  const kegToRestock = Object.assign({}, selectedKeg, {pintsLeft: selectedKeg.pintsLeft + 124});
  const editedMasterKegList = this.state.masterKegList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(kegToRestock);
  this.setState({
    masterKegList: editedMasterKegList,
    selectedKeg: kegToRestock
  });
}

handleDeletingKeg = (id) => {
  const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
  this.setState({
    masterKegList: newMasterKegList,
    selectedKeg: null
  });
}

render(){
  let currentlyVisibleState = null;
  let buttonText = null;

  if (this.state.editing){
    currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />;
    buttonText = "Return to Keg List";
  } else if (this.state.selectedKeg != null) {
    currentlyVisibleState =
    <KegDetail
      keg = {this.state.selectedKeg}
      onClickingEdit = {this.handleEditClick}
      onClickingBuy = {this.handleBuyClick}
      onClickingRestock = {this.handleRestockClick}
      onClickingDelete = {this.handleDeletingKeg} />;
    buttonText = "Return to Keg List";

  }else if (this.state.formVisibleOnPage) {
    currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}  />;
    buttonText = "Return to Keg List";
  } else {
    currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
    buttonText = "add new Keg";
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );
	}
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool

};


const mapStateToProps = state => {
  return {
    masterTicketList: state
  }
}
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;