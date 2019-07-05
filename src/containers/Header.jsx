import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = store => ({
  isAuthenticated: store.games.isAuthenticated,
});

const Header = ({ isAuthenticated }) => (
  <div>
    <nav>
      <h2>
        <Link to="/">Home</Link>
      </h2>
      {!isAuthenticated ? (
        <div>
          <h2>
            <Link to="/auth">Login</Link>
          </h2>
          <h2>
            <Link to="/join">Sign Up</Link>
          </h2>
        </div>
      ) : (
        <div>
          <h2>
            {/* Comment out for production */}
            {/* <a href="http://localhost:3000">Logout</a> */}
            <a href="http://localhost:8080">Logout</a>
          </h2>
        </div>
      )}
    </nav>
  </div>
);

export default connect(mapStateToProps)(Header);
