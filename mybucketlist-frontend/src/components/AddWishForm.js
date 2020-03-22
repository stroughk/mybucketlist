import React from "react";

const AddWishForm = ({handleChange, handleSubmit}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <label>Wish Fulfilled</label>
      <select
        name="fulfilled"
        onChange={handleChange}
      >
        <option>Fulfilled</option>
        <option>Not fulfilled</option>
      </select>
      <label>Add a wish</label>
      <input
        type="text"
        name="content"
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  </div>
);

export default AddWishForm;
