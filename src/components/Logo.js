import React from 'react';

function Logo(props) {
  return (
    <img
      alt="Logo"
      style={{maxHeight: '48px',}}
      src={`${process.env.PUBLIC_URL}/static/Logo-Kalan-3.png`}
      {...props}
    />
  );
}

export default Logo;
