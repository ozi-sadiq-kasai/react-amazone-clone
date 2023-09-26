import "./Checkout.css"
import Subtotal from "./Subtotal"
import CheckoutProduct from '../components/CheckoutProduct'
import { useStateValue } from "../temp"

const Checkout = () => {
 const [{cart},dispatch] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__Image" src="src/assets/checkout.png" alt="" />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {cart.map((item =>(
           <CheckoutProduct
           id={item.id}
           title={item.title}
           image={item.image}
           price={item.price}
           rating={item.rating}/>
          )))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}
export default Checkout