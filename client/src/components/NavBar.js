import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from "semantic-ui-react";

const Navbar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>
        About
      </Menu.Item>
    </Link>
    <Link to="/department">
      <Menu.Item>
        Department
      </Menu.Item>
    </Link>
    <Link to="/department/:department.id/products">
      <Menu.Item>
        Products
      </Menu.Item>
    </Link>
  </Menu>
)

export default Navbar;