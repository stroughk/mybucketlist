import React from "react";
import WishesContainer from "../containers/WishesContainer"

const Category = ({ category, categories, match }) => {
  category = category || categories[match.params.id - 1];
  const wishes = category.wishes; 

  return wishes ? (
    <div>
      <button className="accordion">{category.name}</button>
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
            <WishesContainer wishes={wishes} /> 
          </tbody>
        </table>
      </div>
    </div>
  ) : null ;
};

export default Category;
