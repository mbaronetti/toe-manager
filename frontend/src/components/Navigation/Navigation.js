import React from "react";
//import "./STYLES.css";
//import useHook from "./useHook.js";
import {Link} from 'react-router-dom'

const Navigation = props => {
  return (
    <ul>
      <li>
          <Link to="/">Notes</Link>
      </li>
      <li>
          <Link to="/create">Create Note</Link>
      </li>
      <li>
          <Link to="/user">Create User</Link>
      </li>
    </ul>
  );
};

export default Navigation;
