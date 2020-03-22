import React from "react";
import { Wish } from "./Wish";

const Wishes = ({ wishes, deleteWish }) =>
  wishes &&
  wishes.map(wish => <Wish wish={wish} deleteWish={deleteWish} key={wish.id}/>);

export default Wishes;
