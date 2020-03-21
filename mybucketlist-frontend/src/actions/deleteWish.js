export const deleteWish = (wishId, categoryId) => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/categories/${categoryId}/wishes/${wishId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(category => dispatch({type: 'DELETE_WISH', payload: category}))
    }
}