const cart = [];

const handleCart = (state = cart, action) => {
  const data = action.payload;
  let product;
  switch (action.type) {
    case "ADDITEM":
      product = data;
      // Check if Product is Already Exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // increase
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      product = data.product;
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1 || data.clearAll) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;
    default:
      return state;
      break;
  }
};

export default handleCart;
