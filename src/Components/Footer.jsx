import React, { useState, useEffect } from 'react';

function Footer() {

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

 

  return (
    <footer className="footer">
      <div className="footer-main">
        <h1 className="footer-portfolio">Portfolio </h1>
        
        <div className="til">
          <h1 className="twitter">Twitter</h1>
          <h1>Instagram</h1>
          <h1>LinkedIn</h1>
        </div>
        <h3 className="available-job">
          <p className="available-dot">.</p>&nbsp;&nbsp;
          {isOnline ? 'OnLine' : 'OffLine'}
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
