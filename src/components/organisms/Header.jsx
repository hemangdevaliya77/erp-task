import React,{useState} from 'react'
import '../styles/header.css'

function Header() {
    const [activeLink, setActiveLink] = useState('sections');
    const handleLinkClick = (link) => {
        setActiveLink(link);
      };
  return (
    <>
    <div className='header'>
      <ul>
        <li
          className={activeLink === 'sections' ? 'active' : ''}
          onClick={() => handleLinkClick('sections')}
        >
          Sections
        </li>
        <li
          className={activeLink === 'lists' ? 'active' : ''}
          onClick={() => handleLinkClick('lists')}
        >
          Lists
        </li>
      </ul>
    </div>
  </>
  )
}

export default Header