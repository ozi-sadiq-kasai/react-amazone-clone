import "./CheckoutProduct.css"

const CheckoutProduct = ({id,image,title,price,rating}) => {
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
        <button>Remove From Cart</button>
      </div>
    </div>
  )
}
export default CheckoutProduct