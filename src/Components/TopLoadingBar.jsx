// TopLoadingBar.js
import React from 'react';

const TopLoadingBar = ({ loading, progress }) => {

    
  const width = loading ? `${progress}%` : '0';

  return (
    <div
      className={`fixed top-0 left-0 h-1 bg-blue-500 w-full`}
      style={{
        width,
        transition: loading ? 'width 0.3s linear' : 'none',
        zIndex: 1000,
      }}
    ></div>
  );
};

export default TopLoadingBar;
