import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";


const Navbar = (props) => {
  const userPage = `user/${this.props}/`
  return (
    <section>
        <Link to="/login">Sign In</Link>
        <Link to="/user/collection">Collection</Link>
        <Link to={userPage}>Deck</Link>
        <Link to="/cardIndex">cardIndex</Link>
    </section>
  );
};

export default Navbar;