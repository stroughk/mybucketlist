import React from "react";
export const Wish = ({ wish, deleteWish}) => (<tr>
  <td>{ wish.content }</td>
  <td>
    <input type="radio" name="fulfilled" value="true" /> Yes
    <input type="radio" name="fulfilled" value="false" /> No
    </td>
  <td>
    <input type="button" value="Delete" onClick={() => deleteWish(wish.id, 2)()} />
  </td>
</tr>);
