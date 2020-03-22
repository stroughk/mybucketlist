import React from "react";
import { Redirect } from "react-router-dom";

import WishesContainer from "../containers/WishesContainer";
import Wishes from "./Wishes";

const Category = ({ category, categories, match }) => {
  category = category || categories[match.params.id - 1];

  return (
    <div>
      <button className="accordion">{category ? category.name : null}</button>
      <div className="panel">
        <table id="wishes">
          <thead>
            <tr>
              <th>Wish</th>
              <th>Fulfilled</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <Wishes wishes={category.wishes}/>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
