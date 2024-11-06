import React,{useState} from 'react'
import '../styles/header.css'
import DisplayContent from '../pages/DisplayContent'; 
function SectionHeader({ activeLink, handleLinkClick }) {
  
  
  return (
    <>
    <div className='header'>
      <ul>
        <li
          className={activeLink === 'sections' ? 'active' : ''}
          onClick={() => handleLinkClick('sections')}
        >
          All
        </li>
        <li
          className={activeLink === 'lists' ? 'active' : ''}
          onClick={() => handleLinkClick('lists')}
        >
          Section 1
        </li>
      </ul>
    </div>


 
  </>
  )
}

export default SectionHeader