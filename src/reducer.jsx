// export const initialState = {
//   cart: [],
// }

// export const getCartTotal = (cart) =>
//   cart?.reduce((amount, item) => parseFloat(item.price) + amount, 0)


// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const updatedCart = [...state.cart, action.item]
//       return {
//         ...state,
//         cart: updatedCart,
//       }

//     case 'REMOVE_FROM_CART':
//       const removeCart = state.cart.findIndex((cartItem) =>{
//        return basketItem.id === action.id
//       })
//        let newCart =[...state.cart]
//        if( removeCart >= 0){
//           newCart.splice(newCart,1)
//        }
//        else{
//         console.warn(
//          "Can't remove product (id: ${action.id}) as its not in basket!")
//         }
//           return {
//         ...state,
//         cart: updatedCart,
//       }
//        }

    

//     default:
//       return state
//   }
 
// }

// export default reducer

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

    case 'REMOVE_FROM_CART':
      const removeIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      )

      if (removeIndex >= 0) {
        let newCart = [...state.cart]
        newCart.splice(removeIndex, 1)

        return {
          ...state,
          cart: newCart,
        }
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the cart!`
        )
        return state // Return the current state if the item is not found in the cart
      }

    default:
      return state
  }
}

export default reducer
