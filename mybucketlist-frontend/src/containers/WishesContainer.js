import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import AddWishForm from "../components/AddWishForm";
import Wishes from "../components/Wishes";
import { deleteWish } from "../actions/deleteWish";

const WishesContainer = ({ wishes, categoryId }) => wishes ?
  <Wishes wishes={wishes} categoryId={categoryId} deleteWish={deleteWish} /> : null 

const mapDispatchToProps = dispatch => bindActionCreators({ deleteWish }, dispatch);

export default connect(null, mapDispatchToProps)(WishesContainer);
