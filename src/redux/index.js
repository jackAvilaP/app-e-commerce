import { actions } from "./actions";

const INITIAL_STATE = {
  id: 1,
  products: [],
  isLoading: false,
  categories: [],
  foundCategory: [],
  listProductCart: [],
  listProductPurchases: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.setId:
      return {
        ...state,
        id: action.payload
      };

    case actions.setProducts:
      return {
        ...state,
        products: action.payload
      };
    case actions.setListCart:
      return {
        ...state,
        listProductCart: action.payload
      };
    case actions.setListPurchases:
      return {
        ...state,
        listProductPurchases: action.payload
      };

    case actions.setIsloading:
      return {
        ...state,
        isLoading: action.payload
      };
    case actions.setCategories:
      return {
        ...state,
        categories: action.payload
      };
    case actions.setFoundCategory:
      return {
        ...state,
        foundCategory: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
