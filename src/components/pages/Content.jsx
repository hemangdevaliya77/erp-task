import React,{useState} from 'react'
import Header from '../organisms/Header'
import TaskDetails from '../organisms/TaskDetails'
import '../styles/content.css'
import AlertPopUp from '../molecules/AlertPopUp'
import SearchBar from '../molecules/SearchBar'
import SectionHeader from '../organisms/SectionHeader'
import DisplayContent from './DisplayContent'

function Content() {

    const [activeLink, setActiveLink] = useState('sections');  // Manage activeLink state

    
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };
  
  return (
    <div className='content' >
{/* <h3>Content Page</h3> */}
<Header/>
<AlertPopUp/>
<TaskDetails/>
<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
  <SectionHeader  activeLink={activeLink} handleLinkClick={handleLinkClick} />
  <div>
    <SearchBar />
  </div>
</div>
<DisplayContent activeLink={activeLink}/>
    </div>
  )
}

export default Content