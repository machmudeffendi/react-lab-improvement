import React from 'react';

export default function Nav(props) {
  return(
    <nav className="nav-1 flex-column">
      {props.children}
    </nav>
  )
}
