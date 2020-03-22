import React from 'react'

const AddCategoryForm = ({ handleSubmit, handleChange}) => (
  <div className="category">
    <form onSubmit={handleSubmit}>
      <h2>Add New Category</h2>
      <input
        type="text"
        placeholder="Enter category name"
        name="categoryName"
        onChange={handleChange}
      />
      <input type="submit" value="Add" />
    </form>
  </div>
);

export default AddCategoryForm;
