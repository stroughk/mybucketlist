import React from "react";
import WishesContainer from "../containers/WishesContainer";
import AddWishFormContainer from "../containers/AddWishFormContainer";

const CategoryHeader = ({ category }) => (
  <div className="categoryHeader">
    <div className="addWishForm">
      <span className="categoryTitle">{category.name}</span>
      
      <AddWishFormContainer category={category}/>
    </div>
  </div>
)

const Category = ({ category, categories, match }) => {
  category = category || categories[match.params.id - 1];
  const wishes = category.wishes; 

  return wishes.length > 0 ? (
    <div className="category">
      <CategoryHeader category={category}/>
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
            <WishesContainer wishes={wishes} categoryId={category.id}/> 
          </tbody>
        </table>
      </div>
    </div>
  ) : <div className="category"><CategoryHeader category={category}/> No wishes</div> ;
};

export default Category;
