import React from 'react';

// Top level jsx component that wraps all subcomponents. I don't know
// why you're supposed to do it this way.
export default ({children}) => {
  return (
    <div id="container">
      {children}
    </div>
  );
}
