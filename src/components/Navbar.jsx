import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#282c34", color: "white",fontSize:"20px" }}>
      <ul style={{ display: "flex",justifyContent:"center", listStyle: "none", gap: "80px" }}>
        <li><Link to="/" style={{ color: "white",backgroundColor:"black",padding:"10px 20px",borderRadius:"6px" , textDecoration: "none",fontWeight:"bold" }}>Dashboard</Link></li>
        <li><Link to="/tasks" style={{ color: "white",backgroundColor:"black",padding:"10px 20px",borderRadius:"6px" , textDecoration: "none",fontWeight:"bold" }}>Tasks</Link></li>
        <li><Link to="/snippets" style={{ color: "white",backgroundColor:"black",padding:"10px 20px",borderRadius:"6px" , textDecoration: "none",fontWeight:"bold" }}>Snippets</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;