import React from 'react';

function Logo(props) {
  return (
    <img
      alt="Logo"
      src={`${process.env.PUBLIC_URL}/static/logo.svg`}
      {...props}
    />
  );
}

export default Logo;
