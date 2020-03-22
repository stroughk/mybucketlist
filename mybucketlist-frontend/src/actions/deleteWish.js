export function deleteWish (wishId, categoryId) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/categories/${categoryId}/wishes/${wishId}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(category =>
        dispatch({
          type: 'DELETE_WISH',
          payload: {
            categoryId: category.id,
            wishId
          }
        }
        ))
      .catch(error => console.log("Something is wrong", error))
  }
}