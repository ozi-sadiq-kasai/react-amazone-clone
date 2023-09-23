import "./Product.css"

const Product = ({title,image, price,rating}) => {
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
         .map((_,i) =>(<p>⭐</p>))}
          
        </div>
        <img src={image} alt="" />
        {/* <div className="product__cart">
         
        </div> */}
        <button>Add to Cart</button>
      </div>
    </div>
  )
}
export default Product