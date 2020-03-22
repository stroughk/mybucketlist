import React from "react";
export const Wish = ({ wish, deleteWish, categoryId}) => (<tr>
  <td>{ wish.content }</td>
  <td>
    <input type="radio" name="fulfilled" value="true" /> Yes &nbsp;
    <input type="radio" name="fulfilled" value="false" /> No
    </td>
  <td>
    <input type="button" value="Delete" onClick={deleteWish(wish.id, categoryId)} />
  </td>
</tr>);
