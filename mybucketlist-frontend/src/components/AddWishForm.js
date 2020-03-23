import React from "react";

const AddWishForm = ({handleChange, handleSubmit, value}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="content"
        onChange={handleChange}
        value={value}
        placeholder="Enter a new wish"
      />
      <input type="submit" value="Add"/>
    </form>
  </div>
);

export default AddWishForm;
