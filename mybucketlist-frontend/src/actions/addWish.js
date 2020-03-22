export const addWish = (wish, categoryId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/categories/${categoryId}/wishes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(wish)
        })
        .then(response => response.json())
        .then(category => 
            dispatch({type: 'ADD_WISH', payload: category}))
    }
}