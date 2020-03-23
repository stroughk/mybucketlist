export function updateWish(wish, categoryId) {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/categories/${categoryId}/wishes/${wish.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(wish)
    })
      .then(response => response.json())
      .then(() => window.location.reload())
      .catch(error => console.error("Unable to update", error))
  }
}
