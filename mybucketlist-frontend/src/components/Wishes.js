import React from "react";
import Wish from "./Wish";

const Wishes = ({ wishes, deleteWish, categoryId, updateWish }) =>
  wishes &&
  wishes.map(wish => <Wish wish={wish} deleteWish={deleteWish} categoryId={categoryId} key={wish.id} updateWish={updateWish}/>);

export default Wishes;
