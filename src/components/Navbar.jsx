import React, { useState } from "react";

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav style={styles.nav}>
      {/* Logo Section */}
      <div style={styles.logoContainer}>
        <img src="/files/logo.png" alt="Logo" style={styles.logo} />
      </div>

      {/* Navigation Links */}
      <ul style={styles.navList}>
        {/* Home link */}
        <li style={styles.navItem}>
          <a href="/" style={styles.link}>Home</a>
        </li>

        {/* About Us link */}
        <li style={styles.navItem}>
          <a href="/about" style={styles.link}>About Us</a>
        </li>

        {/* Useful Links with Dropdown */}
        <li style={styles.navItem} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span style={styles.link}>Useful Links</span>
          
          {/* Dropdown menu */}
          {dropdownOpen && (
            <ul style={styles.dropdownMenu}>
              <li style={styles.dropdownItem}>
                <a href="/files/credits.pdf" style={styles.link} target="_blank" rel="noopener noreferrer">Credit Requirements</a>
              </li>
              <li style={styles.dropdownItem}>
                <a href="/files/campus-life.pdf" style={styles.link} target="_blank" rel="noopener noreferrer">Campus Life</a>
              </li>
              <li style={styles.dropdownItem}>
                <a href="https://www.insti.app/explore" style={styles.link} target="_blank" rel="noopener noreferrer">Insti App</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

// Simple inline styles for the navbar
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1E90FF", // Dodger Blue
    padding: "10px",
  },
  logoContainer: {
    flex: 1, // Use flex to take available space
  },
  logo: {
    height: "80px", // Adjust height as needed
    marginRight: "20px", // Space between logo and nav links
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginRight: "20px",
    position: "relative",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  dropdownMenu: {
    position: "absolute",
    top: "30px",
    left: 0,
    backgroundColor: "#444",
    padding: "10px",
    listStyle: "none",
    margin: 0,
    borderRadius: "4px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  dropdownItem: {
    marginBottom: "10px",
  },
};
