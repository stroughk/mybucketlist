import React from "react";
import { connect } from "react-redux";
import { deleteWish } from "../actions/deleteWish";
import { Wish } from "./Wish";

const Wishes = ({ wishes, deleteWish }) =>
  wishes &&
  wishes.map(wish => <Wish wish={wish} deleteWish={deleteWish} key={wish.id}/>);

export default connect(null, { deleteWish })(Wishes);
