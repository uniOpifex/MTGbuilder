import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
        <Link to="/collection">Collection</Link>
        <Link to="decks">deck</Link>
    </div>
  );
};

export default Navbar;