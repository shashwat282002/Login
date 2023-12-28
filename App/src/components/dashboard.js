import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './dashboard.css'; // Import the CSS file
import AddCar from './Pages/AddCar'; // Import the AddCar component

const Dashboard = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/dashboard" className="nav-link">
              FabCar
            </Link>
          </li>
          <li>
            <Link to="/addCar" className="nav-link">
              Add Car
            </Link>
          </li>
          <li>
            <Link to="/changeOwner" className="nav-link">
              Change Owner
            </Link>
          </li>
          <li>
            <button className="nav-link search-btn" onClick={toggleSearchBar}>
              Search Cars
            </button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/addCar" element={<AddCar />} />
        {/* Add other routes for ChangeOwner, Search, etc., if needed */}
      </Routes>
      {showSearchBar && (
        <div className="search-bar">
          <input type="text" placeholder="Search cars..." />
          <button className="search-btn">Search</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
