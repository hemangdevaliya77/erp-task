import React from 'react';
import All from '../templates/All';  // Import All component
import Sections from '../templates/Sections';  // Import Sections component

const DisplayContent = ({ activeLink }) => {
  // Render different content based on the activeLink prop
  const renderContent = () => {
    switch (activeLink) {
      case 'sections':
        return <All />;  // Render 'All' when activeLink is 'sections'
      case 'lists':
        return <Sections />;  // Render 'Sections' when activeLink is 'lists'
      default:
        return <All />;  // Default to 'All' if no valid activeLink is found
    }
  };

  return (
    <div className="content" style={{ marginTop: '20px', padding: '20px 0' }}>
      {renderContent()}  {/* Render the correct component */}
    </div>
  );
};

export default DisplayContent;
