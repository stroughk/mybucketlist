import React from "react";
import { Redirect } from "react-router-dom";

import WishesContainer from "../containers/WishesContainer";

const Category = props => {
  let category = props.category || props.categories[props.match.params.id - 1];

  return (
    <div>
      <h1>{category ? category.name : null}</h1>
      <WishesContainer category={category}/>
    </div>
  );
};

export default Category;
