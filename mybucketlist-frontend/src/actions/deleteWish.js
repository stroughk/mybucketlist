export function deleteWish (wishId, categoryId) {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/categories/${categoryId}/wishes/${wishId}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(category =>
        dispatch({
          type: 'DELETE_WISH',
          payload: category,
        }
        ))
      .catch(error => console.error("Something is wrong >>", error))
  }
}