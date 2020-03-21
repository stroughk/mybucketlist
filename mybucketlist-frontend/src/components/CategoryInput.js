import React from 'react'

const CategoryInput = ({ handleSubmit, handleChange}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <label>My Bucket List Category</label>
      <input
        type="text"
        placeholder="Category Name"
        name="categoryName"
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  </div>
);

export default CategoryInput;
