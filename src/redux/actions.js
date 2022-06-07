//1. declarar la propiedad  objeto actions
//2. crear el case con la propiedad creada en 1
//3. hacer la funcion que retorne la accion
//4. despachar la funcion en componente o thunk
// endponit https://documenter.getpostman.com/view/5028918/UVypxw3W#aac8d62c-60d0-41ea-a708-e1a472e6610c
import axios from "axios";

export const actions = {
  setId: "SET_ID", //para poder mostarar el pructo en la lista del carrito
  setProducts: "SET_PRODUCTS",
  setIsloading: "SET_ISLOANDING",
  setCategories: "SET_CATEGORIES",
  setFoundCategory: "SET_FOUNDCATEGORY",
  setListCart: "SET_LIST_CART",
  setListPurchases: "SET_LIST_PURCHASES"
};

const getConfig = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});
export const setId = (id) => ({
  type: actions.setId,
  payload: id
});

export const setProducts = (products) => ({
  type: actions.setProducts,
  payload: products
});

export const setListCart = (listProductCart) => ({
  type: actions.setListCart,
  payload: listProductCart
});
export const setListPurchases = (listProductPurchases) => ({
  type: actions.setListPurchases,
  payload: listProductPurchases
});

export const setIsloading = (isLoading) => ({
  type: actions.setIsloading,
  payload: isLoading
});
export const setCategories = (categories) => ({
  type: actions.setCategories,
  payload: categories
});

export const setFoundCategory = (foundCategory) => ({
  type: actions.setFoundCategory,
  payload: foundCategory
});

export const getProductsThunk = () => {
  return (dispatch) => {
    dispatch(setIsloading(true));

    return axios
      .get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
      .then((res) => dispatch(setProducts(res.data.data.products)))
      .finally(() => dispatch(setIsloading(false)));
  };
};

export const getCategoriesThunk = () => {
  return (dispatch) => {
    dispatch(setIsloading(true));
    return axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => dispatch(setCategories(res.data.data.categories)))
      .finally(() => dispatch(setIsloading(false)));
  };
};
export const filterCategoriesThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsloading(true));
    return axios
      .get(
        `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`
      )
      .then((res) => dispatch(setProducts(res.data.data.products)))
      .finally(() => dispatch(setIsloading(false)));
  };
};

export const foundCategoriesThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsloading(true));
    return axios
      .get(
        `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`
      )
      .then((res) => dispatch(setFoundCategory(res.data.data.products)))
      .catch((error) => {
        if (error.response.status === 500) {
          //dispatch(setListCart([]));
          console.log("error 500")
        }
      })
      .finally(() => dispatch(setIsloading(false)));
  };
};

export const filterTitleThunk = (title) => {
  return (dispatch) => {
    dispatch(setIsloading(true));
    return axios
      .get(
        `https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${title}`
      )
      .then((res) => dispatch(setProducts(res.data.data.products)))
      .finally(() => dispatch(setIsloading(false)));
  };
};

export const loginUsersThunk = (credentials) => {
  return (dispatch) => {
    dispatch(setIsloading(true));
    return axios
      .post(
        "https://ecommerce-api-react.herokuapp.com/api/v1/users/login",
        credentials
      )
      .finally(() => dispatch(setIsloading(false)));
  };
};

export const addCartsThunk = (productsInCart) => {
  return (dispatch) => {
    dispatch(setIsloading(true));
    return axios
      .post(
        "https://ecommerce-api-react.herokuapp.com/api/v1/cart",
        productsInCart,
        getConfig()
      )
      .finally(() => dispatch(setIsloading(false)));
  };
};

export const addPurchasesThunk = () => {
  return (dispatch) => {
    dispatch(setIsloading(true));
    return axios
      .post(
        "https://ecommerce-api-react.herokuapp.com/api/v1/purchases",
        {},
        getConfig()
      )
      .finally(() => dispatch(setIsloading(false)));
  };
};
export const getCartListThunk = () => {
  return (dispatch) => {
    //dispatch(setIsloading(true));
    return axios
      .get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
      .then((res) => dispatch(setListCart(res.data.data.cart.products)))
      .catch((error) => {
        if (error.response.status === 404 && localStorage.getItem("")) {
          dispatch(setListCart([]));
        }
        if(error.response.status === 401) {
          
          dispatch(setListCart([]));
        }
      });
    //.finally(() => dispatch(setIsloading(false)));
  };
};

export const getPurchaseThunk = () => {
  return (dispatch) => {
    //dispatch(setIsloading(true));
    return axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/purchases",
        getConfig()
      )
      .then((res) => dispatch(setListPurchases(res.data.data.purchases)))
      .catch((error) => {
        if (error.response.status === 404 && localStorage.getItem("")) {
          dispatch(setListCart([]));
        }
      });
    //.finally(() => dispatch(setIsloading(false)));
  };
};
export const deletCartListThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsloading(true));
    return axios
      .delete(
        `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`,
        getConfig()
      )
      .then(() => dispatch(getCartListThunk()))
      .catch((error) => {
        if (error.response.status === 404 && localStorage.getItem(" ")) {
          dispatch(setListCart([]));
          console.log("first")
        }
      })
      .finally(() => dispatch(setIsloading(false)));
  };
};
