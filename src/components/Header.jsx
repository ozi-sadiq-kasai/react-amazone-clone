// import './Header.css'
// import { AiOutlineSearch } from 'react-icons/ai'
// import { BsBasket } from 'react-icons/bs'
// import { Link } from 'react-router-dom'
// import { useStateValue } from '../temp.jsx'


// const Header = () => {
//   const [{ cart }, dispatch] = useStateValue()
//   return (
//     <div className="header">
//       <Link to="/">
//         <img
//           className="header__logo"
//           src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//           alt="logo"
//         />
//       </Link>

//       <div className="header__search">
//         <input type="text" className="header__searchInput" />
//         <AiOutlineSearch className="header__searchIcon" size={25} />
//       </div>

//       <div className="header__nav">
//         <Link to="/login">
//           <div className="header__option">
//             <span className="header__OptionLineOne">Hello Guest</span>
//             <span className="header__OptionLineTwo">Sign In</span>
//           </div>
//         </Link>
//         <div className="header__option">
//           <span className="header__OptionLineOne">Returns</span>
//           <span className="header__OptionLineTwo">&Orders</span>
//         </div>
//         <div className="header__option">
//           <span className="header__OptionLineOne">Your</span>
//           <span className="header__OptionLineTwo">Prime</span>
//         </div>
//         <Link to="/checkout">
//           <div className="header__OptionBasket">
//             <BsBasket />
//             <span className="header__OptionLineTwo header__BasketCount">
//               {cart.length}
//             </span>
//           </div>
//         </Link>
//       </div>
//     </div>
//   )
// }
// export default Header
import './Header.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useStateValue } from '../temp.jsx'
import React, { useState } from 'react'

const Header = () => {
  const [{ cart }, dispatch] = useStateValue()
  const [signInClicked, setSignInClicked] = useState(false)

  const handleSignInClick = () => {
    // Update the state when "Sign In" link is clicked
    setSignInClicked(true)
  }

  // Conditionally render the header based on the state
  if (signInClicked) {
    return null // Don't render the header
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <AiOutlineSearch className="header__searchIcon" size={25} />
      </div>

      <div className="header__nav">
        <Link to="/login" onClick={handleSignInClick}>
          <div className="header__option">
            <span className="header__OptionLineOne">Hello Guest</span>
            <span className="header__OptionLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__OptionLineOne">Returns</span>
          <span className="header__OptionLineTwo">&Orders</span>
        </div>
        <div className="header__option">
          <span className="header__OptionLineOne">Your</span>
          <span className="header__OptionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__OptionBasket">
            <BsBasket />
            <span className="header__OptionLineTwo header__BasketCount">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
