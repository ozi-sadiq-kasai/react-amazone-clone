export const initialState = {
  cart: [],
}

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => parseFloat(item.price) + amount, 0)


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCart = [...state.cart, action.item]
      return {
        ...state,
        cart: updatedCart,
      }
    default:
      return state
  }
}

export default reducer

