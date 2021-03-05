import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper  blue lighten-4 px1">
        <NavLink to="/" className="brand-logo">
          React+Typescript
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">List items</NavLink>
          </li>
          <li>
            <NavLink to="/about">Information</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
