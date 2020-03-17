import React from "react";

const Wishes = props => {
  return <div>
    {props.wishes && props.wishes.map(wish =>
    <li key={wish.id}>{wish.content}- {wish.fulfilled}</li>

    )}</div>;
};

export default Wishes;
