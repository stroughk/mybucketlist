export default function categoryReducer(state = {categories: []}, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return {categories: action.payload}
    case 'CREATE_CATEGORY':
      return {...state, categories: [...state.categories, action.payload]}
    default:
      return state
  }
}
