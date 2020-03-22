import React from "react";
import { connect } from "react-redux";

import Wishes from "../components/Wishes";
import { deleteWish } from "../actions/deleteWish";

const WishesContainer = ({ wishes, categoryId, deleteWish }) => wishes ?
  <Wishes wishes={wishes} categoryId={categoryId} deleteWish={deleteWish} /> : null 

export default connect(null, { deleteWish })(WishesContainer);
