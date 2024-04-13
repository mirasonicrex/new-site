import { useState } from 'react';

interface DropdownMenuProps {
  portfolioLink: string,
  year: string
}

const DropdownMenu = ({ portfolioLink, year }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <div onClick={handleClick} style={{ 
          margin: '10px', 
          padding: '5px', 
          cursor: 'pointer', 
          background: 'white', 
          textAlign: 'left', 
          boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          borderRadius: '5px'
        }}>
        <h4>Click to show {year} portfolio</h4>
        <div style={{fontWeight:'900',paddingRight: '10px'}}>{'>'}</div>
      </div>
      {isOpen && (
        <div style={{ width: '100%', paddingTop: '56.25%', position: 'relative',display: 'flex',  justifyContent: 'center',   background: '#f0f0f0'  ,    borderRadius: '5px' }}>
  
          <iframe
            src={portfolioLink}
            style={{
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              overflow: 'hidden',
            
            }}
            title="Portfolio"
          ></iframe>
          </div>
    
      )}
    </div>
  );
};

export default DropdownMenu;