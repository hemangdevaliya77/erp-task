import React, { useState } from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import CustomIcon from '../atoms/Icon/CustomIcon';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ViewListIcon from '@mui/icons-material/ViewList';

function Header({ links = [], onLinkClick }) {
  const [activeLink, setActiveLink] = useState(links[0]?.name || '');

  const handleTabChange = (event, newValue) => {
    setActiveLink(newValue);
    if (onLinkClick) {
      onLinkClick(newValue); // Optional callback for parent component
    }
  };

  return (
    <Box >
      <Tabs
        value={activeLink}
        onChange={handleTabChange}
        aria-label="header navigation"
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {links.map((link) => (
          <Tab
            key={link.name}
            label={
              <div >
                {link.icon && (
                  <CustomIcon
                    IconComponent={link.icon}
                    color="primary"
                    size="small"
                    
                  />
                )}
                {link.label}
              </div>
            }
            value={link.name}
            sx={{ textTransform: 'none', fontWeight: activeLink === link.name ? 'bold' : 'normal' }}
          />
        ))}
      </Tabs>
    </Box>
  );
}

export default Header;
