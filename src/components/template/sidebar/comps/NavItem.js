import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavItem(props){
  return (
    <NavLink to={'/'+props.label.toLowerCase()} onClick={props.toggleMenu}>{props.label}</NavLink>
  );
}
