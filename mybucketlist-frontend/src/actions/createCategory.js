export const createCategory = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/categories', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
             method: 'POST',
             body: JSON.stringify(data) 
        })
        .then(response => response.json())
        .then(category => dispatch({type: 'CREATE_CATEGORY', payload: category}))
    }
}