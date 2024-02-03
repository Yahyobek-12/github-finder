import '../Styles/Navbar.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { FaWindowClose } from "react-icons/fa";
import { ApiContext } from '../Constans/Constans';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { searchQuery, setSearchQuery } = useContext(ApiContext);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className='nav'>
      <Link to=''>GitSearcher</Link>
      <form className={active ? 'form-active' : 'form'}>
        <input type="text" placeholder='Search User...'
        value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </form>
      {active ? <FaWindowClose className='menu closer' onClick={toggleActive} /> : <CgMenuRight className='menu' onClick={toggleActive} />}
    </div>
  )
}

export default Navbar
