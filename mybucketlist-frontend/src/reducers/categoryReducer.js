export default function categoryReducer(state = { categories: [] }, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return { categories: action.payload };
    case "CREATE_CATEGORY":
      return { ...state, categories: [...state.categories, action.payload] };
    case "ADD_WISH":
    case "UPDATE_WISH":
      let categories = state.categories.map(category => {
        if (category.id === action.payload.id) {
          return action.payload;
        } else {
          return category;
        }
      })
      return { ...state, categories: categories };
      case 'DELETE_WISH':
        let newCategories = state.categories.map(category => {
          if (category.id === action.payload.id) {
            return action.payload;
          } else {
            return category;
          }
        })
        return { ...state, categories: newCategories };
    default:
      return state;
  }
}
