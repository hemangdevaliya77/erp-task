import React,{useState} from 'react'
import Header from '../organisms/Header'
import TaskDetails from '../organisms/TaskDetails'
import '../styles/content.css'
import AlertPopUp from '../molecules/AlertPopUp'
import SearchBar from '../molecules/SearchBar'
import SectionHeader from '../organisms/SectionHeader'
import DisplayContent from './DisplayContent'

import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ViewListIcon from '@mui/icons-material/ViewList';


function Content() {

    const [activeLink, setActiveLink] = useState('sections');  // Manage activeLink state
    const links = [
      { name: 'users', label: 'users', icon: AutoAwesomeMosaicIcon },
      { name: 'sales', label: 'sales', icon: ViewListIcon },
    ];
  
    const links2 = [

      { name: 'Sections', label: 'Sections'},
      { name: 'lists', label: 'Lists' },
    ];
  
    
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };
  
  return (
    <div className='content' >
{/* <h3>Content Page</h3> */}

{/* <Header/> */}
<div className='header1'>
  <Header links={links} onLinkClick={handleLinkClick} />
</div>
<AlertPopUp/>

<TaskDetails/>
<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
  {/* <SectionHeader  activeLink={activeLink} handleLinkClick={handleLinkClick} /> */}
  <Header links={links2} onLinkClick={handleLinkClick} />
  <div>
    <SearchBar />
  </div>
</div>
<DisplayContent activeLink={activeLink}/>


    </div>
  )
}

export default Content