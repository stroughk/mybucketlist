import React from "react";
import {connect} from 'react-redux';
import {deleteWish} from '../actions/deleteWish';

const Wishes = props => {

  const handleDelete = (wish) => {
    props.deleteWish(wish.id, wish.transaction_id)
  }

  return <div>
    {props.wishes && props.wishes.map(wish =>
    <li key={wish.id}>{wish.content}- {wish.fulfilled} <button onClick={() => handleDelete(wish)}>Delete</button></li>

    )}</div>;
};

export default connect(null, {deleteWish})(Wishes)
