import React from "react";

const AddWishForm = ({handleChange, handleSubmit}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="content"
        onChange={handleChange}
        placeholder="Enter a new wish"
      />
      <input type="submit" value="Add"/>
    </form>
  </div>
);

export default AddWishForm;
