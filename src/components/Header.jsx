import './Header.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBasket } from 'react-icons/bs'
const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <AiOutlineSearch className="header__searchIcon" size={25} />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__OptionLineOne">Hello Guest</span>
          <span className="header__OptionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__OptionLineOne">Returns</span>
          <span className="header__OptionLineTwo">&Orders</span>
        </div>
        <div className="header__option">
          <span className="header__OptionLineOne">Your</span>
          <span className="header__OptionLineTwo">Prime</span>
        </div>
        <div className="header__OptionBasket">
          <BsBasket />
          <span className="header__OptionLineTwo header__BasketCount">0</span>
        </div>
      </div>
    </div>
  )
}
export default Header