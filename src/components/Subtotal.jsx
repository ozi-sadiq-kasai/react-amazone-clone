
import React from 'react'
import { useStateValue } from '../temp' // Make sure to use the correct import path
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from "../reducer.jsx"

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue()

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} // Use the calculated total price here
        displayType={'text'}
        thousandSeparator={true} // Correct the typo here
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal






