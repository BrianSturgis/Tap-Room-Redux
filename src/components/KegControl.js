import React from 'react';
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from '../actions/index';

class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      createNewKeg: false,
      selectedKeg: null,
      editing: false
    }
  }

  //Read
  showListOrForm = () => {
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

  //Read - Details
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  //Create
  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  //Update
  handleEditClick= () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  //Reduce Keg Inventory
  handleBuyClick = () => {
    const { dispatch } = this.props;
    const { pintsLeft, id } = pintToBuy;
    const selectedKeg = this.props.selectedKeg;
    const pintToBuy = Object.assign({}, selectedKeg, {pintsLeft: selectedKeg.pintsLeft - 1});
    const action = {
      type: 'BUY_PINT',
      pintsLeft: selectedKeg.pintsLeft - 1,
      id
    }
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(pintToBuy);
    dispatch(action);
    this.setState({
      masterKegList: editedMasterKegList,
      selectedKeg: pintToBuy
    });
  }

  //Restock Large Keg
  handleRestockClick = () => {
    const { dispatch } = this.props;
    const { pintsLeft, id } = kegToRestock;
    const selectedKeg = this.props.selectedKeg;
    const kegToRestock = Object.assign({}, selectedKeg, {pintsLeft: selectedKeg.pintsLeft + 124});
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToRestock);
    const action = {
      type: 'RESTOCK_KEG',
      pintsLeft: pintsLeft + 124,
      id
    };
    dispatch(action);
    this.setState({
      masterKegList: editedMasterKegList,
      selectedKeg: kegToRestock
    });
  }

  //Delete Keg
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  render() {
    let buttonText = null;
    let currentlyVisibleState = null;

    if (this.state.editing){
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List"
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState =
      <KegDetail
        keg = {this.state.selectedKeg}
        onClickingEdit = {this.handleEditClick}
        onClickingBuy = {this.handleBuyClick}
        onClickingRestock = {this.handleRestockClick}
        onClickingDelete = {this.handleDeletingKeg} />;
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add New Keg";
    }
    return (
      <>
        {currentlyVisibleState}
        <button className="btn btn-warning" style={{marginBottom: '20px'}} onClick={this.showListOrForm}>{buttonText}</button>
      </>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;