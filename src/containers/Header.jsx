import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
      <h2>
        <Link to="/">Login</Link>
      </h2>
      <h2>
        <Link to="/">Sign Up</Link>
      </h2>
    </div>
);

export default Header;
