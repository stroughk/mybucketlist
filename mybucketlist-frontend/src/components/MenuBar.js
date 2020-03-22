import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => (
  <div className="menu-bar">
  <ul>
    <li className="active">
      <Link to="/">
        <i className="fa fa-home" aria-hidden="true"></i>
        &nbsp; Home
      </Link>
    </li>

    <li className="active">
      <Link to="/categories">
        <i className="fa fa-list" aria-hidden="true"></i>
        &nbsp; View My Bucket List
      </Link>
    </li>

    <li className="active">
      <Link to ="/categories/new">
        <i className="fa fa-plus" aria-hidden="true"></i>
          &nbsp; Add Category
      </Link>
    </li>
    
      <div className="sub-menu-1">
        <ul>
          <li>
            <Link to="/categories/new">Add a New Category</Link>
          </li>
          
          <li>
            <Link to="/">Add a New Wish</Link>
          </li>
        </ul>
      </div>
    </ul>
  </div>
);

export default MenuBar;
