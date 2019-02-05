import React from 'react';

function ExtLink({ href, key, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )  
}

export default ExtLink;



