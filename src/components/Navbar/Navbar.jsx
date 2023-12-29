import './Navbar.css'
import { IoLogoGithub } from "react-icons/io5";
import { MdContentPasteSearch } from "react-icons/md";


const Navbar = ({ userName, setUserName, fetchUserData }) => {
  return (
    <div className='navbar'>
      <h3 className="logo">github user finder</h3>
      <div className='search-bar'>
        <input type="text" className="search" placeholder='write user username' value={userName} 
            onChange={(e) => setUserName(e.target.value)} />
        <button className="search-btn" onClick={fetchUserData}><MdContentPasteSearch className='search-icon' /></button>
      </div>
      <IoLogoGithub className='github-logo' />
    </div>
  )
}

export default Navbar
