import React from 'react'

const AddCategoryForm = ({ handleSubmit, handleChange}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <label>My Bucket List Category</label>
      <input
        type="text"
        placeholder="Category Name"
        name="categoryName"
        onChange={handleChange}
      />
      <input type="submit" value="Add" />
    </form>
  </div>
);

export default AddCategoryForm;
