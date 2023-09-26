import "./CheckoutProduct.css"
import { useStateValue } from "../temp"
import reducer from "../reducer"

const CheckoutProduct = ({id,image,title,price,rating}) => {
  // Dispatch an action to remove the item from the cart
  const [{ cart }, dispatch] = useStateValue()

  const removeItem = (itemToRemove) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id, // You may need to adjust this depending on how your cart state is structured
    })
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
        <p className="checkout__price">{price}</p>
        <button onClick={removeItem}>Remove From Cart</button>
      </div>
    </div>
  )
}
export default CheckoutProduct