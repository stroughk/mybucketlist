import React from "react";
import { connect } from "react-redux";

import Wishes from "../components/Wishes";
import { deleteWish } from "../actions/deleteWish";
import { updateWish } from "../actions/updateWish";

const WishesContainer = ({ wishes, categoryId, deleteWish }) => wishes ?
  <Wishes wishes={wishes} categoryId={categoryId} deleteWish={deleteWish} updateWish={updateWish}/> : null 

export default connect(null, { deleteWish, updateWish })(WishesContainer);
