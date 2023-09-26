import { useStateValue } from '../temp.jsx'
import './Product.css'

const Product = ({ title, image, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue()

  const addToCart = () => {
    // dispatch the item to the data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id:title,
        title: title,
        image: image,
        price: price,
        rating:rating
      },
    })
  }

  return (
    <div>
      <div className="product">
        <p className="product__info">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <img src={image} alt="" />
        {/* <div className="product__cart">
         
        </div> */}
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  )
}
export default Product
