import { FaCartShopping } from 'react-icons/fa6';
import { FaStoreAlt } from 'react-icons/fa';
import Search from './Search/Search';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <span className="logo"><span>Luiza <br /> Store</span><FaStoreAlt /></span>
      <Search />
      <FaCartShopping className="cart-icon" />
    </header>
  );
};

export default Header;
