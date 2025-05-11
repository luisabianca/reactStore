import { IoIosSearch } from 'react-icons/io';
import './Search.css';

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="O que você está procurando?"/>
      <IoIosSearch />
    </div>
  );  
};

export default Search;