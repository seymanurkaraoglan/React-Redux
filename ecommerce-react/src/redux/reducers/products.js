export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        products: action.payload,
      };

    default:
      return state;
  }
};
export const productsDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};
